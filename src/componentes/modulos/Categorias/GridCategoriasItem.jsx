import { Separator } from '@shadcn/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shadcn/carousel';
import { Skeleton } from '@shadcn/skeleton';
import { Trash2 } from 'lucide-react';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/';
import { useGetGifs } from '@/hooks/useGetGifs';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {});

const GridCategoriasItem = ({ categoria, onEliminarCategoria }) => {
  const { gifs, cargando: cargandoGifs } = useGetGifs(categoria);
  return (
    <div className="flex flex-col gap-3 bg-white p-4 rounded-sm shadow-md">
      <div className="flex justify-between items-center gap-3 w-full">
          <span className="text-xl font-semibold">{ categoria }</span>
          <span><Trash2 color="var(--danger)" className="h-[1em] cursor-pointer" onClick={ () => { onEliminarCategoria(categoria); } } /></span>
      </div>
      <Separator />
      { cargandoGifs && <Skeleton className="w-full h-40" /> || (
        gifs.length && (
          <div className="flex justify-center">
            <Carousel className="w-full px-10">
              <CarouselContent className="items-center">
                { gifs.map(({ id, url, title }) => (
                  <CarouselItem
                    key={ id }
                    className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 3xl:basis-1/7 cursor-pointer"
                    data-fancybox="gallery"
                    data-src={ url }
                    data-caption={ title }
                    title={ title }
                  >
                    <div
                      className="bg-cover bg-center h-32 lg:h-40 w-full rounded-lg shadow-lg"
                      style={{ backgroundImage: `url('${ url }')` }}
                    ></div>
                  </CarouselItem>
                )) }
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        ) || <div className="px-2 py-4 text-center rounded-sm shadow-md text-opacity-50">Sin Imagenes.</div>
      ) }
    </div>
  )
}
export default GridCategoriasItem;
