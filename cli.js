#!/usr/bin/env node

const fs = require('fs');
const path = require('path');


const indexCssPath = path.resolve('src/index.css');
const appCssPath = path.resolve('src/App.css');
const appJsxPath = path.resolve('src/App.jsx');


function emptyFile(filePath) {
  if (fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, ''); 
    console.log(`Cleared contents of ${filePath}`);
  } else {
    console.error(`File not found: ${filePath}`);
  }
}


function overwriteAppJsx() {
  const appJsxContent = `
function App(){
  return (
    <>
    </>
  );
}

export default App;
`;

  if (fs.existsSync(appJsxPath)) {
    fs.writeFileSync(appJsxPath, appJsxContent.trim());  
    console.log(`Overwritten content of ${appJsxPath}`);
  } else {
    console.error(`File not found: ${appJsxPath}`);
  }
}

emptyFile(indexCssPath);
emptyFile(appCssPath);
overwriteAppJsx();