==================
    DEPLOYMENT
==================
=> When deploying you need to modify the links in these files (from 'localhost' to 'http://www.tripimagine.com')
BACK END
- (1) routes/api/users.js
- (2) routes/api/tripform.js
FRONT END
- (3) client/src/actions/authActions.js
- (4) client/src/actions/fileActions.js
- (5) client/src/actions/profileActions.js
- (6) client/src/actions/itineraryActions.js
- (7) client/src/components/menu.js
- (8) client/src/store.js (here just put in comments the redux devtools extension line)

=> Use the hashtag #deploymentVariableToChange to find the places where it is necessary to change a variable from dev to production mode and vice versa. It will be commented under the variable to change.