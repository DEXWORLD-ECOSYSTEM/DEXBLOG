import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

// The main page component
export default async function DocRootPage() {
  const filePath = path.join(process.cwd(), 'docs', `index.mdx`);

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
