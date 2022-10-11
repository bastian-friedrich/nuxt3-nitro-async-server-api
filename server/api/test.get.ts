export default defineEventHandler((event) => {
  const { giphyApiKey } = useRuntimeConfig();

  $fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=cat&limit=25&offset=0&rating=g&lang=en`).then(res => {
    console.log('res', res.data[0].url);
  });

  return {
    foo: 'bar',
    // res: res.data[0].url
  }
})