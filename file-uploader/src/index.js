const express = require('express');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');
const { passport } = require('./middlewares/auth');
const path = require('node:path');

const port = process.env.APP_PORT || 3000;
const app = express();

const assetsPath = path.join(path.dirname(__dirname), 'public');
app.use(express.static(assetsPath));

app.use(
    expressSession({
        cookie: {
            maxAge: 7 * 24 * 60 * 60 * 1000,
        },
        secret: 'deez',
        resave: false,
        saveUninitialized: false,
        store: new PrismaSessionStore(new PrismaClient(), {
            checkPeriod: 2 * 60 * 1000,
            dbRecordIdFunction: undefined,
            dbRecordIdIsSessionId: true,
        }),
    }),
);
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/indexRouter');
const fileRouter = require('./routes/fileRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/file', fileRouter);

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});
