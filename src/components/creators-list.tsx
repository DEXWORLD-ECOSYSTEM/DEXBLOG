
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const creators = [
  {
    name: 'Juca Kfouri',
    postTitle: 'O golpe em gestação no Santos',
    avatarUrl: '/images/ads/ad-air-drop.png',
    postUrl: '#',
  },
  {
    name: 'Paulo Camargo',
    postTitle: 'Você é pago para errar; só acerte mais do que erre',
    avatarUrl: '/images/ads/ad-air-drop.png',
    postUrl: '#',
  },
  {
    name: 'TixaNews',
    postTitle: "'O que de errado temos feito?', pergunta Gilmar",
    avatarUrl: '/images/ads/ad-air-drop.png',
    postUrl: '#',
  },
  {
    name: 'Milly Lacombe',
    postTitle: 'Paulistão feminino oferece futebol de alto nível',
    avatarUrl: '/images/ads/ad-air-drop.png',
    postUrl: '#',
  },
  {
    name: 'Creator 5',
    postTitle: 'Another post title',
    avatarUrl: '/images/ads/ad-air-drop.png',
    postUrl: '#',
  },
    {
    name: 'Creator 6',
    postTitle: 'Another post title',
    avatarUrl: '/images/ads/ad-air-drop.png',
    postUrl: '#',
  },
];

export function CreatorsListComponent() {
  return (
    <section className="bg-gray-900 py-8">
        <div className="container mx-auto px-4">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-primary"></div>
                </div>
            </div>
            <div className="py-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {creators.map((creator, index) => (
                    <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="flex items-center space-x-4 p-4">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-16 w-16 rounded-lg object-cover"
                            src={creator.avatarUrl}
                            alt={creator.name}
                            width={64}
                            height={64}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-red-500">{creator.name}</p>
                          <Link href={creator.postUrl}>
                            <p className="text-sm text-gray-400 hover:underline">{creator.postTitle}</p>
                          </Link>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
             <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-700"></div>
                </div>
            </div>
        </div>
    </section>
  );
}
