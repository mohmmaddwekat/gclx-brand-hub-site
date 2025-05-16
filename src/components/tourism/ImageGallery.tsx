
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface ImageGalleryProps {
  images: string[];
  destinationName: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, destinationName }) => {
  const { isRTL } = useLanguage();

  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-3 text-gclx-navy">
        {isRTL ? "معرض الصور" : "Image Gallery"}
      </h4>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-2">
                    <img 
                      src={image}
                      alt={`${destinationName} scene ${index + 1}`}
                      className="w-full h-[150px] object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={isRTL ? "right-0" : "left-0"} />
        <CarouselNext className={isRTL ? "left-0" : "right-0"} />
      </Carousel>
    </div>
  );
};

export default ImageGallery;
