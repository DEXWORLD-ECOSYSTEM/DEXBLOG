import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getAuthorById, getTagsByIds, getCategoryById } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { TagPills } from '@/components/tag-pills';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicatorGroup } from '@/components/ui/carousel';

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const author = getAuthorById(post.authorId);
  const category = getCategoryById(post.categoryId);
  const tags = getTagsByIds(post.tagIds);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
            <article className="lg:col-span-8">
              <header className="mb-8">
                {category && (
                  <Badge variant="secondary" asChild className="mb-4">
                    <Link href={`/categories/${category.slug}`}>{category.name}</Link>
                  </Badge>
                )}
                <h1 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  {author && (
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.imageHint} />
                        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{author.name}</span>
                    </div>
                  )}
                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
                  </time>
                </div>
              </header>

              <div className="relative mb-8 h-64 md:h-96 w-full overflow-hidden rounded-lg">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  data-ai-hint={post.imageHint}
                  priority
                />
              </div>

              <div
                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\\`\\`\\`/g, '```') }}
              />

              <footer className="mt-12">
                <div className="border-t pt-8">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <TagPills tags={tags} />
                </div>
                {author && (
                  <div className="mt-12 flex items-start rounded-lg border bg-card p-6">
                    <Avatar className="h-16 w-16 mr-6">
                      <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.imageHint}/>
                      <AvatarFallback>{author.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm text-muted-foreground">Written by</p>
                      <h4 className="text-xl font-bold">{author.name}</h4>
                      <p className="mt-2 text-muted-foreground">{author.bio}</p>
                    </div>
                  </div>
                )}
              </footer>
            </article>

            <aside className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="sticky top-24 space-y-8">
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
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                           <Link href="#">
                            <div className="relative h-[250px] w-[300px]">
                              <Image
                                src="https://picsum.photos/seed/ad1/300/250"
                                alt="Advertisement"
                                fill
                                className="object-cover rounded-lg"
                                data-ai-hint="advertisement square"
                              />
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                     <CarouselItem>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                           <Link href="#">
                            <div className="relative h-[250px] w-[300px]">
                              <Image
                                src="https://picsum.photos/seed/ad3/300/250"
                                alt="Advertisement"
                                fill
                                className="object-cover rounded-lg"
                                data-ai-hint="product promo"
                              />
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                   <CarouselIndicatorGroup />
                </Carousel>

                 <Carousel
                  className="w-full"
                  opts={{
                    loop: true,
                  }}
                  autoplay
                  autoplayDelay={7000}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <Card>
                        <CardContent className="flex items-center justify-center p-0">
                          <Link href="#">
                            <div className="relative h-[600px] w-[300px]">
                              <Image
                                src="https://picsum.photos/seed/ad2/300/600"
                                alt="Advertisement"
                                fill
                                className="object-cover rounded-lg"
                                data-ai-hint="advertisement vertical"
                              />
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                     <CarouselItem>
                      <Card>
                        <CardContent className="flex items-center justify-center p-0">
                          <Link href="#">
                            <div className="relative h-[600px] w-[300px]">
                              <Image
                                src="https://picsum.photos/seed/ad4/300/600"
                                alt="Advertisement"
                                fill
                                className="object-cover rounded-lg"
                                data-ai-hint="fashion ad"
                              />
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                   <CarouselIndicatorGroup />
                </Carousel>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
