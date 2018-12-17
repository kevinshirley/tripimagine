const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
var nodemailer = require('nodemailer');
var moment = require('moment');

// Load input validation
const validateTripFormInput = require('../../validation/tripform');

// Load User model
// const User = require('../../models/User');
const TripForm = require('../../models/TripForm');

// response headers
router.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', ['GET,PUT,POST,DELETE,OPTIONS']);
  res.append('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.append('Access-Control-Max-Age', 86400);
  next();
});

// @route   POST /trip-form
// @desc    send trip form
// @access  Public
var corsOptions = {
  origin: true,
  // #deploymentVariableToChange
  credentials: false,
  methods: ['POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}; /* change origin to 'http://www.tripimagine.com' when prep for production, 'true' (without the quotation) in dev */

app.options('/', cors(corsOptions));

router.post('/', cors(corsOptions), (req, res) => {
  const { errors, isValid } = validateTripFormInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newForm = new TripForm({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });

  newForm.save()
    .then(form => {

      // send new lead to tripimagine team
      var transporter = nodemailer.createTransport({
        host: 'sub5.mail.dreamhost.com',
        port: 465,
        secure: true,
        auth: {
          user: 'admin@tripimagine.com',
          pass: 'Trip3471Trip'
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });

      var currentDate = moment().format('LLLL');
      var year = moment().format('YYYY');

      var html = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><title>New Lead from Dream Vacation Form</title></head><body style="margin:0; padding:0; background-color:#F9F9F9; font-family: arial;"><center><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:20px;"><tr><td align="center" valign="top"><img src="http://media.tripimagine.com/img/trip-imagine-full-logo.png" alt="Trip Imagine" /></td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F9F9F9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"></td></tr></table><table width="90%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:5px; padding-left:15px; padding-right:15px;"><tr><td align="center" valign="top"><h3>Hi there, here is the data from the new lead.</h3></td></tr><tr><td align="left" valign="top"><h4>Name: <p style="color:#3F3F3F;">' + newForm.name + '</p></h4></td></tr><tr><td align="left" valign="top"><h4>Email: <p style="color:#3F3F3F;">' + newForm.email + '</p></h4></td></tr><tr><td align="left" valign="top"><h4>Phone: <p style="color:#3F3F3F;">' + newForm.phone + '</p></h4></td></tr><tr><td align="left" valign="top"><h4>Date: <p style="color:#3F3F3F;">' + currentDate + '</p></h4></td></tr><tr><td align="left" valign="top"><h4>Message: <p style="color:#3F3F3F;">' + newForm.message + '</p></h4></td></tr></table><table width="90%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:20px;"><tr><td align="center" valign="top"><p>--</p><p>For any support contact<br/><a href="mailto:admin@tripimagine.com">admin@tripimagine.com</a></p></td></tr><tr><td align="center" valign="top"><br/><p>The Trip Imagine Team<br/><a href="http://www.tripimagine.com">http://www.tripimagine.com</a></p></td></tr><tr><td align="center" valign="top"><br/><small>© ' + year + ' TripImagine, All Rights Reserved.</small></td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F9F9F9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"></td></tr></table></center></body></html>';
      
      var mailOptions = {
        from: '"Trip Imagine Team" <admin@tripimagine.com>',
        to: 'tripimagine@gmail.com',
        // 'tripimaginetestacc@gmail.com' in dev, 'tripimagine@gmail.com' in production
        subject: 'New Lead from Dream Vacation Form',
        html: html
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      // send confirmation to new customer
      var transporter = nodemailer.createTransport({
        host: 'sub5.mail.dreamhost.com',
        port: 465,
        secure: true,
        auth: {
          user: 'info@tripimagine.com',
          pass: 'Trip3471Trip'
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });

      var html = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Your Dream Vacation request Confirmation</title></head><body style="margin:0; padding:0; background-color:#f9f9f9; font-family: arial;"><center><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:20px;"><tr><td align="center" valign="top"><img src="http://media.tripimagine.com/img/trip-imagine-full-logo.png" alt="Trip Imagine" /></td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"></td></tr></table><table width="90%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:40px; padding-bottom:5px; padding-left:15px; padding-right:15px;"><tr style="padding-top:10px; padding-bottom:10px;"><td align="center" valign="top"><h3 style="padding-top:10px; padding-bottom:10px; color:#33D333">Your Dream Vacation request has been Received!</h3></td></tr><tr style="padding-top:10px; padding-bottom:10px;"><td align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"><h5>Step 1.</h5><br/><img src="http://media.tripimagine.com/img/check-mark.png" alt="Trip Imagine" /></td><td align="center" valign="middle" style="padding-top:55px;"><img src="http://media.tripimagine.com/img/right-arrow-symbol.png" alt="Trip Imagine" /></td><td align="center" valign="top"><h5>Step 2.</h5><br/><img src="http://media.tripimagine.com/img/support-agent.png" alt="Trip Imagine" /></td></tr></table></td></tr><tr><td align="left" valign="top"><p style="padding-top:50px; padding-bottom:35px;">Hi ' + newForm.name + ',<br/><br/> You just completed our <em style="color:#3F3F3F;">Dream Vacation</em> form. You are now onboarding to the second step of <em style="color:#3F3F3F;">Your Trip As Imagined</em> journey.<br/><br/> One of our <em style="color:#3F3F3F;">Luxury Travel Consultants</em> will pick up your application, get in touch with you by email or phone and work with you, throughout the whole journey, to create a tailor-made itinerary that will complement all of your wishes for your next vacation.<br/><br/> Sit tight, as your <em style="color:#3F3F3F;">Trip Imagine</em> consultant will contact you in the next 24 hours.<br/><br/> Regards</p></td></tr><tr style="padding-top:10px; padding-bottom:10px;"><td align="center" valign="top"><table width="80%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" valign="top"><hr/></td></tr></table></td></tr></table><table width="90%" border="0" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" style="padding-top:20px; padding-bottom:20px;"><tr><td align="center" valign="top"><p>--</p><p>For more information<br/><a href="mailto:info@tripimagine.com">info@tripimagine.com</a></p></td></tr><tr><td align="center" valign="top"><br/><p>The Trip Imagine Team<br/><a href="http://www.tripimagine.com">http://www.tripimagine.com</a></p></td></tr><tr><td align="center" valign="top"><br/><small>© ' + year + ' TripImagine, All Rights Reserved.</small></td></tr></table><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f9f9f9" style="padding-top:15px; padding-bottom:15px;"><tr><td align="center" valign="top"></td></tr></table></center></body></html>';
      
      var mailOptions = {
        from: '"Trip Imagine Team" <info@tripimagine.com>',
        to: newForm.email,
        subject: 'Your Dream Vacation request Confirmation',
        html: html
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return res.json({ success: 'You have successfully submitted your Dream Vacation request. You will receive a confirmation email shortly.', form: form });
    });

});

module.exports = router;
