const https = require('https');

const appId = process.argv[2];

if (!appId) {
  console.log('Usage: node fetch-app-icon.js <appId>');
  console.log('Example: node fetch-app-icon.js 6747131797');
  process.exit(1);
}

const url = `https://itunes.apple.com/lookup?id=${appId}`;

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      if (json.resultCount === 0) {
        console.error('No app found with that ID.');
        return;
      }

      const app = json.results[0];
      const iconUrl = app.artworkUrl512 || app.artworkUrl100;
      
      console.log('\n--- App Information ---');
      console.log(`Name: ${app.trackName}`);
      console.log(`Developer: ${app.artistName}`);
      console.log(`Icon URL: ${iconUrl}`);
      console.log('\nCopy the Icon URL above and paste it into your projects.ts file.\n');
    } catch (e) {
      console.error('Error parsing response:', e.message);
    }
  });
}).on('error', (err) => {
  console.error('Error fetching data:', err.message);
});
