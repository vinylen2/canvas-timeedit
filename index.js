const timeedit = require('./api/timeedit.js');

const result = timeedit.get().then((response) => {
  console.log(response.data.reservations);
});