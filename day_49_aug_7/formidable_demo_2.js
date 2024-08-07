import express from 'express';
import formidable from 'formidable';
import fs from 'fs';
const __dirname = import.meta.dirname;

const app = express();

app.post('/api/upload', (req, res) => {
    const formidableObj = formidable();
    formidableObj.parse(req, (err, fields, files) => {
        const allFiles = files.myFiles;
        for (let file of allFiles) {
            let oldPath = file.filepath;
            let newPath = `${__dirname}/${file.originalFilename}`;
            let fileToCopy = fs.readFileSync(oldPath);
            fs.writeFileSync(newPath, fileToCopy);
        }
        res.send('File Uploaded successfully!!')
    });
});

app.listen(5000, () => {
    console.log('Server listening on http://localhost:5000 ...');
});