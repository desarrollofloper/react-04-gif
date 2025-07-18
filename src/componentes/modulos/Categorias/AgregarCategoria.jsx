import { useRef, useState } from 'react';
import { Button } from '@shadcn/button';
import { Input } from '@shadcn/input';

const AgregarCategoria = ({ onAgregarCategoria }) => {
  const inputCategoriaRef = useRef();
  const [value, setValue] = useState('');
  const onChange = (e) => {
    inputCategoriaRef.current.setCustomValidity('');
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const valueLimpio = value.trim();
    if(!valueLimpio){
      setValue(valueLimpio);
      inputCategoriaRef.current.setCustomValidity('No marches!');
      inputCategoriaRef.current.reportValidity();
      return;
    }
    onAgregarCategoria(value);
    setValue('');
  };
  return (
    <form className="flex gap-4 items-center" onSubmit={ onSubmit }>
      <Input
        ref={ inputCategoriaRef }
        type="text"
        placeholder="Categoría"
        value={ value }
        onChange={ onChange }
        required
      />
      <Button type="submit">Agregar categoría</Button>
    </form>
  );
}
export default AgregarCategoria;