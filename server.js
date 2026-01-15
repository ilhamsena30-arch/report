const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const reportPath = path.join(__dirname, 'allure-report');

// Debug logging
console.log('=== Allure Report Server ===');
console.log('Report path:', reportPath);
console.log('Exists:', fs.existsSync(reportPath));
console.log('Directory contents:', fs.existsSync(reportPath) ? fs.readdirSync(reportPath).slice(0, 5) : 'N/A');

app.use(express.static(reportPath));

app.get('/*', (req, res) => {
  const indexPath = path.join(reportPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Allure report not found. Report path: ' + reportPath);
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`✓ Server running on port ${PORT}`));
