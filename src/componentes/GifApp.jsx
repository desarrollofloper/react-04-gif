import { useState } from 'react';
import { toast } from 'sonner';
import { AgregarCategoria, GridCategorias } from './modulos/Categorias/';

const GifApp = ({  }) => {
  const [categorias, setCategorias] = useState(['Dragon Ball']);
  const onAgregarCategoria = (value) => {
    if(categorias.includes(value)){
      toast.warning('Ya existe esa categoría');
      return;
    }
    setCategorias([
      ...categorias,
      value,
    ]);
    toast.success('Agregado correctamente');
  }
  const onEliminarCategoria = (value) => {
    const categoriasActualizadas = [...categorias];
    const i = categoriasActualizadas.indexOf(value);
    if(i !== -1){
      categoriasActualizadas.splice(i, 1);
      setCategorias(categoriasActualizadas);
      toast.success('Eliminado correctamente');
    }
  }
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Categorías</h1>
        <div className="w-full bg-white p-2 rounded-sm shadow-md">
          <AgregarCategoria onAgregarCategoria={ onAgregarCategoria } />
        </div>
        <GridCategorias
          categorias={ categorias }
          onEliminarCategoria={ onEliminarCategoria }
        />
      </div>
    </>
  );
}
export default GifApp;