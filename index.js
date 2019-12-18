const Koa = require('koa');

// used to parse body repsonses from API
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const calendar = require('./routes/calendar.js');

// creates an instance of the API
const app = new Koa();

// uses bodyParser-lib to construct bodys for returning data
app.use(bodyParser());

// Enable CORS 
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
  allowMethods: ['GET', 'PATCH', 'POST'],
  allowHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
}));


app.listen(3000);

app.use(calendar.routes());


