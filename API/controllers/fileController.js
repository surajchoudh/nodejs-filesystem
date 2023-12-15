const fs = require('fs');
const path = require('path');

const folderPath = 'C:\\Users\\91639\\Desktop\\Nodejs\\API\\controllers\\fileController'; // Replace this with your desired folder path

const createFile = (req, res) => {
    const timestamp = new Date().toISOString();
    const fileName = `${timestamp}.txt`;
    const filePath = path.join(folderPath, fileName);

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log('Directory created successfully');
    } else {
        console.log('Directory already exists');
    }

    console.log('Attempting to write the file');


    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            console.error('Error creating file:', err);
            return res.status(500).json({ error: 'Failed to create file', message: err.message });
        }
        return res.status(201).json({ message: 'File created successfully', fileName });
    });
};

const getAllFiles = (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading files:', err);
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
        const textFiles = files.filter((file) => file.endsWith('.txt'));
        return res.status(200).json({ files: textFiles });
    });
};

module.exports = { createFile, getAllFiles };
