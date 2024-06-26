const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./models'); // Import Sequelize models
const routes = require('./controllers');
const sequelize = require('./config/config');
const exphbs = require('express-handlebars');
const hbsHelpers = require('./utils/hbshelper');
const { FORCE } = require('sequelize/lib/index-hints');
// Load environment variables from .env file
dotenv.config();

const app = express();

const hbs = exphbs.create({});
const PORT = process.env.PORT || 3002;
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sessionStore = new SequelizeStore({ db: sequelize });
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 86400000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));

// Routes
app.use(routes);

// Start the server
sequelize.sync({FORCE}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
