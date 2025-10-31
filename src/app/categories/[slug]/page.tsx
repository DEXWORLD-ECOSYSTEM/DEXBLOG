import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPosts } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PostCard } from '@/components/post-card';
import { PaginationComponent } from '@/components/pagination-component';

export default function CategoryPage({ params, searchParams }: { params: { slug: string }, searchParams: { page?: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }
  
  const page = Number(searchParams.page) || 1;
  const limit = 6;
  const allPostsInCategory = getPosts({ categorySlug: params.slug });
  const posts = allPostsInCategory.slice((page - 1) * limit, page * limit);
  const totalPages = Math.ceil(allPostsInCategory.length / limit);


  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 border-b pb-4">
            <p className="text-sm text-muted-foreground">Category</p>
            <h1 className="font-headline text-4xl font-bold">{category.name}</h1>
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
                <p className="text-muted-foreground">No posts found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
