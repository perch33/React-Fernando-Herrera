/* const getImagenPromesa = () => {
  const promesa = new Promise((resolve, reject) => {
    resolve("hay data");
  });
};
 */

const getImage = async () => {
  const apikey = "12JEOfM1YyiW3Wb2llxqVEgaoUF58CeB";
  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
  );
  const { data } = await resp.json();
  const { url } = data.images.original;

  const img = document.createElement("img");
  img.src = url;
  document.body.appendChild(img);
  console.log(url);
};

getImage();

// petition
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;
//     const img = document.createElement("img");
//     img.src = url;
//     document.body.appendChild(img);
//   })
//   .catch(console.warn);
