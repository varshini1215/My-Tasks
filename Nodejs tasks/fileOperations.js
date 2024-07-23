const fs = require('fs');
const path = require('path');


const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');


const processFile = async () => {
  try {
    
    const data = await fs.promises.readFile(inputFilePath, 'utf8');
    
    
    const modifiedData = `${data}\nAppended text: ${new Date().toISOString()}`;

    await fs.promises.writeFile(outputFilePath, modifiedData, 'utf8');
    
    console.log('File processed successfully!');
  } catch (error) {
    console.error('Error processing file:', error);
  }
};


processFile();