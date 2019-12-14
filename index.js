const timeedit = require('./api/timeedit');
const canvas = require('./api/canvas');
const createCalendarEvent = require('./constructors/calendarEvent');


const context_code = 'group_54297';

timeedit.get().then((response) => {
  response.data.reservations.forEach((item) => {
    const calendar_event = createCalendarEvent(item, context_code);
    canvas.post('calendar_events', {
      calendar_event
    })
      .then((response) => {
        console.log(response);
      })
      .catch(error => console.log(error));
  });
});
