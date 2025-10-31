import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicator, CarouselIndicatorGroup } from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Blogwise',
  description: 'A wise choice for your blogging journey.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto px-4 py-4">
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
               <CarouselIndicatorGroup>
                <CarouselIndicator />
                <CarouselIndicator />
              </CarouselIndicatorGroup>
            </Carousel>
          </div>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
