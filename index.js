const timeedit = require('./api/timeedit');
const canvas = require('./api/canvas');

// const path = 'courses/8176/calendar_events/timetable';
const path = 'calendar_events?context_codes[]=group_54297&start_date=2019-11-24&end_date=2020-01-05&per_page=50';


canvas.get(path)
  .then((response) => {
    console.log(response);
  })
  .catch(error => console.log(error.response.data));