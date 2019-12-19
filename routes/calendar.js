const router = require('koa-router')({ prefix: '/calendar' });
const createCalendarEvent = require ('../constructors/calendarEvent.js');

const canvas = require('../api/canvas');



async function postEvents(ctx) {
  const reservations = ctx.request.body.postData;

  const responses = await reservations.map(async (reservation) => {
    let calendar_event = createCalendarEvent(reservation, 'group_54297');
    let status = '';

    try {
      status = await canvas.post('calendar_events', {calendar_event});
      console.log(status);
      return status;
    }
    catch {
      return false;
    }
    canvas.post('calendar_events', {calendar_event}).then((result) => {
      status = result;
      status = true;
    }).catch((error) => {
      status = false;
    });
  });

  ctx.body = {
    responses,
  }
}

async function postEvent(ctx) {
  const reservation = ctx.request.body;

  let calendar_event = createCalendarEvent(reservation, 'group_54297');
  let status = false;
  let message = '';

  try {
    const response = await canvas.post('calendar_events', {calendar_event});
    status = true;
    message = 'Lektion publicerad i Canvas';
  } catch (error) {
    status = false;
    message = 'Lektion kunde inte publiceras i Canvas';
  }

  ctx.body = {
    status,
    message,
  };
}

router.post('/events', postEvents);
router.post('/event', postEvent);

module.exports = router;