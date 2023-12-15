const express = require('express');
const fileRoutes = require('./API/routes/fileRoutes');

const app = express();

app.use('/API/files', fileRoutes);

const port = 3001; // Change the port number if needed
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
