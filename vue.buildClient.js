const path = require('path');

module.exports = {
  outputDir: 'dist/client',
  pages:{
    index:{
      entry: 'src/client/main.ts',
      template: 'src/client/index.html',
      filename: 'index.html',
    }
  }
}