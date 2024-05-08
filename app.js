const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/create', (req, res) => {
  // Simulate API response status
  const apiResponseStatus = 200;

  // Check if API response status is 200
  if (apiResponseStatus === 200) {
    // Generate a unique filename using UUID and timestamp
    const fileName = `file_${uuidv4()}_${Date.now()}.txt`;

    // Create a blank file
    fs.writeFile(fileName, '', (err) => {
      if (err) {
        console.error('Error creating file:', err);
        return res.status(500).send('Internal Server Error');
      }
      console.log('New file created successfully:', fileName);
      return res.status(200).send('File created successfully.');
    });
  } else {
    // If API response status is not 200, send appropriate response
    return res.status(apiResponseStatus).send('API Error');
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
