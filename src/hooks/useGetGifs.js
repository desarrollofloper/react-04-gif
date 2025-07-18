import { useState, useEffect } from 'react';
import { getGifs } from '@/helpers/getGifs';

export const useGetGifs = (categoria) => {
  const [gifs, setGifs] = useState([]);
  const [cargando, setCargando] = useState(true);
  const a_getGifs = async () => {
    setGifs(await getGifs(categoria));
    setCargando(false);
  }
  useEffect(() => {
    a_getGifs();
  }, []);
  return {
    gifs,
    cargando,
  }
}