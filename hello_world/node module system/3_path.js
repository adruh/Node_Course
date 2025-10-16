const path = require('path');
let ext = path.extname('C:\\Users\\Public\\Dev\\Node\\hello_world\\node module system\\2_os.js');
console.log(ext);
let base = path.basename('C:\\Users\\Public\\Dev\\Node\\hello_world\\node module system\\2_os.js');
console.log(base);
let dir = path.dirname('C:\\Users\\Public\\Dev\\Node\\hello_world\\node module system\\2_os.js');
console.log(dir);
console.log(__dirname);
console.log(__filename);