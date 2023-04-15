const apikey = "12JEOfM1YyiW3Wb2llxqVEgaoUF58CeB";

const petition = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
);

petition
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(console.warn);
