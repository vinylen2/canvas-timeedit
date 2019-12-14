const timeedit = require('./api/timeedit');
const canvas = require('./api/canvas');

timeedit.get().then((response) => {
  console.log(response.data.reservations[0]);
});

// canvas.post('calendar_events', {
//   calendar_event: {
//     context_code: "group_54297",
//     title: "HEJ",
//     start_at: "2019-12-14T22:00:00Z",
//     end_at: "2019-12-14T23:00:00Z",
//   }
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(error => console.log(error));

