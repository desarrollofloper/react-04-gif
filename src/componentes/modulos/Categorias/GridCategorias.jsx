import { GridCategoriasItem } from './';

const GridCategorias = ({
  categorias,
  onEliminarCategoria,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {
        categorias.length
        ? categorias.map((categoria) => (
          <GridCategoriasItem
            categoria={ categoria }
            onEliminarCategoria={ onEliminarCategoria }
            key={ categoria }
          />
        ))
        : <div className="bg-white px-2 py-4 text-center rounded-sm shadow-md text-opacity-50">Sin Categorías.</div>
      }
    </div>
  );
};
export default GridCategorias;