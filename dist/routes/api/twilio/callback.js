const express = require('express');
const router = express.Router();
const Twilio = require('twilio');
const accountSid = 'AC799e4303fa6ee49d7aab9a6225bb7e39';
const authToken = '457bb86642031e4a73d9536652e5f345';
const TwilioClient = Twilio(accountSid, authToken);

/** response headers */
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

/**
  * Make outgoing calls to travel planning service
  * @route /callback/outgoing/service
  * @param void
  * @return void
  */
router.post('/outgoing/service', (req, res) => {
  TwilioClient.calls.create({
    url: 'http://media.tripimagine.com/sounds/phone-dial.wav',
    to: '+15149221846',
    from: '+18006150592'
  }).then(call => process.stdout.write(call.sid));
});

/**
  * Make outgoing calls to support
  * @route /callback/outgoing/support
  * @param void
  * @return void
  */
router.post('/outgoing/support', (req, res) => {
  TwilioClient.calls.create({
    url: 'http://media.tripimagine.com/sounds/phone-dial.wav',
    to: '+15144334978',
    from: '+18006150592'
  }).then(call => process.stdout.write(call.sid));
});

module.exports = router;
//# sourceMappingURL=callback.js.map