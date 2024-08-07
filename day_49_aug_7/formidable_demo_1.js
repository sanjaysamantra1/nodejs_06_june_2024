import express from 'express';
import formidable from 'formidable';

const app = express();

app.post('/api/upload', (req, res, next) => {
    const formidableObj = formidable({});
    formidableObj.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        res.json({ fields, files });
    });
});

app.listen(5000, () => {
    console.log('Server listening on http://localhost:5000 ...');
});