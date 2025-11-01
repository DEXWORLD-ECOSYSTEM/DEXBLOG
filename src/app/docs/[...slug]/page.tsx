
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Helper function to get all MDX files from the docs directory
async function getMdxFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getMdxFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files).filter((file) => file.endsWith('.mdx'));
}

// This function generates the static paths for all doc pages at build time
export async function generateStaticParams() {
  const docsDirectory = path.join(process.cwd(), 'docs');
  const files = await getMdxFiles(docsDirectory);

  return files.map((file) => ({
    slug: path
      .relative(docsDirectory, file)
      .replace(/\\.mdx$/, '')
      .split(path.sep),
  }));
}

// The main page component
export default async function DocPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.join('/') || 'index';
  const filePath = path.join(process.cwd(), 'docs', `${slug}.mdx`);

  let source;
  try {
    source = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    // If the file is not found, we show a 404 page
    return notFound();
  }

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline">
      <MDXRemote source={source} />
    </article>
  );
}
