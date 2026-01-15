const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const reportPath = path.join(__dirname, '..', 'allure-report');

// Debug logging
console.log('=== Allure Report Server ===');
console.log('Report path:', reportPath);
console.log('Exists:', fs.existsSync(reportPath));
console.log('Index.html exists:', fs.existsSync(path.join(reportPath, 'index.html')));

// Serve static files from allure-report
app.use(express.static(reportPath));

// Catch all routes and serve index.html
app.get('/*', (req, res) => {
  const indexPath = path.join(reportPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ 
      error: 'Allure report not found',
      reportPath: reportPath,
      exists: fs.existsSync(reportPath)
    });
  }
});

module.exports = app;
