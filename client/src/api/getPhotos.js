import Unsplash, { toJson } from 'unsplash-js';

const getPhotosAPI = (continent, callback) => {
  const query = continent;

  const unsplash = new Unsplash({
    applicationId: "d2a508895279100f7fa42900ca285b38d6c2d9735c93d0544c28febfab68092f",
    secret: "c06453e830dc1f66d5fb92e647a0114047746f17c56267fd48102c10a8d1bbf6",
    callbackUrl: "https://api.unsplash.com/search/photos?"
  });

  unsplash.search.photos(query, 1, 25)
    .then(toJson)
    .then(json => {
      let images = json.results;
      // return images;
      // images.map(img => {
      //   let urls = img.urls;
      //   urls = urls.full;
      //   return urls;
      //   // return console.log(img);
      // });
      let image = images[7];
      return callback({ data: image.urls.small });
    });
};

export default getPhotosAPI;