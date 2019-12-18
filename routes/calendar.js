const router = require('koa-router')({ prefix: '/calendar' });
const createCalendarEvent = require ('../constructors/calendarEvent.js');

const canvas = require('../api/canvas');

async function postEvents(ctx) {
  const reservations = ctx.request.body.postData;

  let reservation = reservations[0];
  let calendarEvent = createCalendarEvent(reservation, 'group_54297');

  reservations.forEach((reservation) => {
    let calendarEvent = createCalendarEvent(reservation, 'group_54297')
    canvas.post('calendar_events',calendarEvent)
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  });
}

async function postEvent(ctx) {
  const reservation = ctx.request.body;

  let calendarEvent = createCalendarEvent(reservation, 'group_54297');

  canvas.post('calendar_events', calendarEvent)
    .then((response) => {
      console.log(response.response.data);
    })
    .catch(error => console.log(error.response.data));
}

router.post('/events', postEvents);
router.post('/event', postEvent);

module.exports = router;