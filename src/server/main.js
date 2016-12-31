import 'babel-polyfill';

import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import multer from 'multer';
import path from 'path';

const app = express();
const upload = multer();

app.set('trust proxy', 1);

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}));

app.post('/upload', upload.array(), (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000);
