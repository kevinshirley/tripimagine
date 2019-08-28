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
  obj.title = file.title ? file.title : null;
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
      const items = response.items.map(item => {
        if (item.fields.coverImage) {
          let coverImage;
          coverImage = mapImage(item.fields.coverImage.fields);
          item.fields.coverImage = coverImage ? coverImage : null;
        }
        if (item.fields.included) {
          let includedItinerary = item.fields.included;
          let newIncluded = [];
          includedItinerary.map(itinerary => {
            newIncluded.push({
              icon: itinerary.fields.icon,
              text: itinerary.fields.text,
            });
          });
          item.fields.included = newIncluded;
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
            accomodationImages.map((img, i) => {
              newSingleAccomodationImage = mapImage(img.fields);
              newSingleAccomodationImage.index = i;
              newAccomodationImages.push(newSingleAccomodationImage);
            });
            accomodation.fields.images = newAccomodationImages;
            newAccomodationImages = [];
            delete accomodation.sys;
            return newAccomodations.push({
              name: accomodation.fields.name,
              images: accomodation.fields.images ? accomodation.fields.images : null,
              description: accomodation.fields.description,
            });
          });
          item.fields.accomodations = newAccomodations;
        }
        if (item.fields.dayToDay) {
          let dayToDayItineraries;
          let dayToDayImages;
          let newDayToDayImages = [];
          let newDayToDay = [];
          let newSingleDayToDayImage;

          dayToDayItineraries = item.fields.dayToDay;
          dayToDayItineraries.map(dayToDay => {
            dayToDayImages = dayToDay.fields.images ? dayToDay.fields.images : null;
            dayToDayImages.map((img, i) => {
              newSingleDayToDayImage = img.fields ? mapImage(img.fields) : null;
              newSingleDayToDayImage ? newSingleDayToDayImage.index = i : null;
              newSingleDayToDayImage ? newDayToDayImages.push(newSingleDayToDayImage) : null;
            });
            dayToDay.fields.images = newDayToDayImages ? newDayToDayImages : null;
            newDayToDayImages = [];
            delete dayToDay.sys;
            return newDayToDay.push({
              name: dayToDay.fields.name ? dayToDay.fields.name : '',
              images: dayToDay.fields.images ? dayToDay.fields.images : null,
              list: dayToDay.fields.list ? dayToDay.fields.list : null,
            });
          });
          item.fields.dayToDay = newDayToDay;
        }
        if (item.fields.whatWeDo) {
          let whatWeDoItineraries;
          let newWhatWeDoItineraries = [];
          whatWeDoItineraries = item.fields.whatWeDo;
          whatWeDoItineraries.map(whatWeDo => {
            newWhatWeDoItineraries.push(whatWeDo.fields);
          });
          item.fields.whatWeDo = newWhatWeDoItineraries;
        }
        return item.fields;
      });

      res.json({ items });
    });
});

/**
  * Fetch the files of a user
  * @route /files/user/:user_id/
  * @param [userId]
  * @return [files]
  */
router.get('/client', (req, res) => {
  const client = contentful.createClient({
    space: 'zk0vpsijbtds',
    accessToken: '5iARda0vhzj442AMh1PpjBNHyudRUgkik9MQ4y1YoS8',
    host: 'cdn.contentful.com'
  });
  client.getEntries({ content_type: 'itineraryBuilder' })
    .then((response) => {
      const items = response.items.map(item => {
        if (item.fields.coverImage) {
          let coverImage;
          coverImage = mapImage(item.fields.coverImage.fields);
          item.fields.coverImage = coverImage ? coverImage : null;
        }
        if (item.fields.included) {
          let includedItinerary = item.fields.included;
          let newIncluded = [];
          includedItinerary.map(itinerary => {
            newIncluded.push({
              icon: itinerary.fields.icon,
              text: itinerary.fields.text,
            });
          });
          item.fields.included = newIncluded;
        }
        if (item.fields.activities) {
          let activitiesItinerary = item.fields.activities;
          let newActivities = [];
          activitiesItinerary.map(itinerary => {
            newActivities.push({
              icon: itinerary.fields.icon,
              text: itinerary.fields.text,
            });
          });
          item.fields.activities = newActivities;
        }
        if (item.fields.price) {
          let priceItinerary = item.fields.price.fields;
          item.fields.price = priceItinerary.text;
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
            accomodationImages.map((img, i) => {
              newSingleAccomodationImage = mapImage(img.fields);
              newSingleAccomodationImage.index = i;
              newAccomodationImages.push(newSingleAccomodationImage);
            });
            accomodation.fields.images = newAccomodationImages;
            newAccomodationImages = [];
            delete accomodation.sys;
            return newAccomodations.push({
              name: accomodation.fields.name,
              images: accomodation.fields.images ? accomodation.fields.images : null,
              description: accomodation.fields.description,
              accommodationWebLink: accomodation.fields.accommodationWebLink ? accomodation.fields.accommodationWebLink : '',
            });
          });
          item.fields.accomodations = newAccomodations;
        }
        if (item.fields.dayToDay) {
          let dayToDayItineraries;
          let dayToDayImages;
          let newDayToDayImages = [];
          let newDayToDay = [];
          let newSingleDayToDayImage;

          dayToDayItineraries = item.fields.dayToDay;
          dayToDayItineraries.map(dayToDay => {
            dayToDayImages = dayToDay.fields.images ? dayToDay.fields.images : null;
            dayToDayImages.map((img, i) => {
              newSingleDayToDayImage = img.fields ? mapImage(img.fields) : null;
              newSingleDayToDayImage ? newSingleDayToDayImage.index = i : null;
              newSingleDayToDayImage ? newDayToDayImages.push(newSingleDayToDayImage) : null;
            });
            dayToDay.fields.images = newDayToDayImages ? newDayToDayImages : null;
            newDayToDayImages = [];
            delete dayToDay.sys;
            return newDayToDay.push({
              name: dayToDay.fields.name ? dayToDay.fields.name : '',
              images: dayToDay.fields.images ? dayToDay.fields.images : null,
              content: dayToDay.fields.content ? dayToDay.fields.content : null,
              list: dayToDay.fields.list ? dayToDay.fields.list : null,
            });
          });
          item.fields.dayToDay = newDayToDay;
        }
        if (item.fields.whatWeDo) {
          let whatWeDoItineraries;
          let newWhatWeDoItineraries = [];
          whatWeDoItineraries = item.fields.whatWeDo;
          whatWeDoItineraries.map(whatWeDo => {
            newWhatWeDoItineraries.push(whatWeDo.fields);
          });
          item.fields.whatWeDo = newWhatWeDoItineraries;
        }
        return item.fields;
      });

      res.json({ items });
    });
});

module.exports = router;