'use client';

import { Suspense, useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { PostCard } from '@/components/post-card';
import { getPosts, getFeaturedPost } from '@/lib/data';
import { PaginationComponent } from '@/components/pagination-component';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicatorGroup } from '@/components/ui/carousel';
import { CreatorsListComponent } from '@/components/creators-list';
import { VideosSection } from '@/components/videos-section';

export default function Home() {
  const posts = getPosts({ page: 1, limit: 6 });
  const featuredPost = getFeaturedPost();
  const fadePlugin = useRef(Fade());
  const bannerImages = Array.from({ length: 10 }, (_, i) => `/images/ads/banner/${i + 1}.png`);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <Carousel
              className="w-full"
              opts={{ loop: true }}
              plugins={[fadePlugin.current, Autoplay({ delay: 5000 })]}
            >
              <CarouselContent>
                {bannerImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Link href="#">
                      <div className="relative h-[90px] w-full overflow-hidden rounded-lg md:h-[150px]">
                        <Image
                          src={src}
                          alt={`Banner de anúncio ${index + 1}`}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselIndicatorGroup />
            </Carousel>
          </section>

          {featuredPost && (
            <section className="mb-12">
              <Card className="overflow-hidden bg-brand-dark shadow-glow border border-brand-cyan/30 rounded-lg">
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
                    <Badge
                      variant="outline"
                      className="mb-2 w-fit border-brand-cyan/50 text-brand-cyan bg-transparent"
                    >
                      Post em Destaque
                    </Badge>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white">
                      <Link href={`/posts/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-brand-secondary mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <Link
                      href={`/posts/${featuredPost.slug}`}
                      className="text-brand-primary hover:underline font-semibold"
                    >
                      Leia Mais
                    </Link>
                  </div>
                </div>
              </Card>
            </section>
          )}

          <CreatorsListComponent />

          <section>
            <h2 className="font-headline text-3xl font-bold mb-8">Artigos Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-12">
              <Suspense fallback={<div>Carregando...</div>}>
                <PaginationComponent totalPages={Math.ceil(getPosts({}).length / 6)} />
              </Suspense>
            </div>
          </section>

          <VideosSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
