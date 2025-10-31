import { notFound } from 'next/navigation';
import { getTagBySlug, getPosts } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PostCard } from '@/components/post-card';
import { PaginationComponent } from '@/components/pagination';

export default function TagPage({ params, searchParams }: { params: { slug: string }, searchParams: { page?: string } }) {
  const tag = getTagBySlug(params.slug);

  if (!tag) {
    notFound();
  }
  
  const page = Number(searchParams.page) || 1;
  const limit = 6;
  const allPostsWithTag = getPosts({ tagSlug: params.slug });
  const posts = allPostsWithTag.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(allPostsWithTag.length / limit);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 border-b pb-4">
            <p className="text-sm text-muted-foreground">Tag</p>
            <h1 className="font-headline text-4xl font-bold">#{tag.name}</h1>
          </header>
          
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              <div className="mt-12">
                <PaginationComponent totalPages={totalPages} />
              </div>
            </>
          ) : (
            <div className="text-center py-16">
                <p className="text-muted-foreground">No posts found with this tag.</p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
