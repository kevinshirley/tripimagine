const express = require('express');
const router = express.Router();
const contentful = require("contentful");

// response headers
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

function mapImage(file) {
  let obj = {};
  obj.title = file.title;
  obj.url = file.file.url;
  obj.contentType = file.file.contentType;
  obj.fileName = file.file.fileName;
  obj.dimensions = file.file.details.image;
  return obj;
}

/**
  * Fetch the files of a user
  * @route /files/user/:user_id/
  * @param [userId]
  * @return [files]
  */
router.get('/itineraries', (req, res) => {
  const client = contentful.createClient({
    space: 'zk0vpsijbtds',
    accessToken: '5iARda0vhzj442AMh1PpjBNHyudRUgkik9MQ4y1YoS8',
    host: 'cdn.contentful.com'
  });
  client.getEntries({ content_type: 'itineraryDestination' })
    .then((response) => {
      let items = response.items.map(item => {
        let coverImage;
        if (item.fields.coverImage) {
          coverImage = mapImage(item.fields.coverImage.fields);
          item.fields.coverImage = coverImage;
        }
        if (item.fields.accomodations) {
          let accomodations;
          let accomodationImages;
          let newAccomodationImages = [];
          let newAccomodations = [];
          let newSingleAccomodationImage;

          accomodations = item.fields.accomodations;
          accomodations.map(accomodation => {
            accomodationImages = accomodation.fields.images;
            accomodationImages.map(img => {
              newSingleAccomodationImage = mapImage(img.fields);
              newAccomodationImages.push(newSingleAccomodationImage);
            });
            accomodation.fields.images = newAccomodationImages;
            newAccomodationImages = [];
            delete accomodation.sys;
            return newAccomodations.push({
              name: accomodation.fields.name,
              images: accomodation.fields.images,
              description: accomodation.fields.description,
            });
          });
          item.fields.accomodations = newAccomodations;
        }
        if (item.fields.dayToDay) {
          let dayToDayItineraries;
          console.log(item.fields.dayToDay);

          dayToDayItineraries = item.fields.dayToDay;
          dayToDayItineraries.map(dayToDay => {
            console.log(dayToDay.fields.name);
          });
        }
        return item.fields;
      });

      res.json({ items });
    });
});

module.exports = router;