export const getGifs = async (categoria) => {
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${ import.meta.env.VITE_GIF_API_KEY }&q=${ encodeURIComponent(categoria) }&limit=10`;
  const response = await fetch(endpoint);
  const { data } = await response.json();
  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.original.url,
  }));
  return gifs;
};
