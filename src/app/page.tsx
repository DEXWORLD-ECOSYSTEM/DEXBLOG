import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PostCard } from '@/components/post-card';
import { getPosts, getFeaturedPost } from '@/lib/data';
import { PaginationComponent } from '@/components/pagination-component';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicatorGroup } from '@/components/ui/carousel';

export default function Home() {
  const posts = getPosts({ page: 1, limit: 6 });
  const featuredPost = getFeaturedPost();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <section className="mb-12">
             <Carousel
              className="w-full"
              opts={{
                loop: true,
              }}
              autoplay
              autoplayDelay={5000}
            >
              <CarouselContent>
                <CarouselItem>
                  <Link href="#">
                    <div className="relative h-[180px] w-full overflow-hidden rounded-lg md:h-[180px]">
                      <Image
                        src="https://picsum.photos/seed/adbanner1/1920/480"
                        alt="Advertisement"
                        fill
                        className="object-cover"
                        data-ai-hint="advertisement banner"
                      />
                    </div>
                  </Link>
                </CarouselItem>
                <CarouselItem>
                   <Link href="#">
                    <div className="relative h-[180px] w-full overflow-hidden rounded-lg md:h-[180px]">
                      <Image
                        src="https://picsum.photos/seed/adbanner2/1920/480"
                        alt="Advertisement 2"
                        fill
                        className="object-cover"
                        data-ai-hint="product promotion"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              </CarouselContent>
              <CarouselIndicatorGroup />
            </Carousel>
          </section>

          {featuredPost && (
            <section className="mb-12">
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <Link href={`/posts/${featuredPost.slug}`}>
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={featuredPost.imageUrl}
                          alt={featuredPost.title}
                          fill
                          className="object-cover"
                          data-ai-hint="blog post"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <Badge variant="outline" className="mb-2 w-fit">Featured Post</Badge>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                      <Link href={`/posts/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                    <Link href={`/posts/${featuredPost.slug}`} className="text-primary hover:underline font-semibold">
                      Read More
                    </Link>
                  </div>
                </div>
              </Card>
            </section>
          )}

          <section>
            <h2 className="font-headline text-3xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-12">
              <PaginationComponent totalPages={Math.ceil(getPosts({}).length / 6)} />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
