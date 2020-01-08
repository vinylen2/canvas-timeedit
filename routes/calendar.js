const router = require('koa-router')({ prefix: '/calendar' });
const createCalendarEvent = require ('../constructors/calendarEvent.js');

const canvas = require('../api/canvas');

async function postEvent(ctx) {
  const reservation = ctx.request.body;

  let calendar_event = createCalendarEvent(reservation, 'group_54297');
  let status = false;
  let response = null;
  let message = '';

  try {
    response = await canvas.post('calendar_events', {calendar_event});
    status = true;
    message = 'Lektion publicerad i Canvas';
  } catch (error) {
    status = false;
    message = 'Lektion kunde inte publiceras i Canvas';
  }

  ctx.body = {
    response: response.data,
    status,
    message,
  };
}

router.post('/event', postEvent);

module.exports = router;