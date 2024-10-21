#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const cssFiles = [
  path.join(process.cwd(), 'src', 'index.css'),
  path.join(process.cwd(), 'src', 'App.css')
];

const appJsxPath = path.join(process.cwd(), 'src', 'App.jsx');


cssFiles.forEach(file => {
  fs.writeFileSync(file, '', 'utf8');
});


const appContent = `
function App() {
  return (
    <>
    </>
  );
}

export default App;
`;

fs.writeFileSync(appJsxPath, appContent.trim(), 'utf8');

console.log('Successfully cleaned the CSS files and reset App.jsx');
