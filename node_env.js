const fs = require('fs');
const rmdir = require("rmdir-promise");

// 读取API文件;
const lib = './lib';
const es = './es';
const typings = './typings';

function deleteDir(dir){
  try {
    fs.accessSync(dir, fs.F_OK);
    rmdir(dir).then(() => {
      try {
        fs.accessSync(dir, fs.F_OK);
      } catch(e) {
        fs.mkdirSync(dir);
      }
    }, () => {
      console.error("We can't remove"+dir);
    });
  } catch(e) {
    fs.mkdirSync(dir);
  }
}
deleteDir(lib);
deleteDir(es);
deleteDir(typings);
