const fs = require('fs');
const buf = fs.readFileSync('public/official-logo.png');
const b64 = buf.toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <clipPath id="rounded">
      <rect x="0" y="0" width="100" height="100" rx="25" ry="25" />
    </clipPath>
  </defs>
  <image href="data:image/png;base64,${b64}" width="100" height="100" clip-path="url(#rounded)" />
</svg>`;
fs.writeFileSync('public/favicon.svg', svg);
console.log('Saved favicon.svg');


