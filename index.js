"use strict";
(function () {
  var app = require('app');
  var BrowserWindow = require('browser-window');
  
  app.commandLine.appendSwitch('disable-web-security');
  app.commandLine.appendSwitch('web-security');
  app.commandLine.appendSwitch('allow-displaying-insecure-content');
  app.commandLine.appendSwitch('ignore-certificate-errors');

  var mainWindow = null;
  app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
      app.quit();
  });

  app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        'web-preferences': {
            'web-security': false
        },
        'node-integration': false,
        preload: __dirname + '/views/index.js'
    });
    
    
    mainWindow.webContents.session.webRequest.onBeforeRequest({}, (d,c)=>{
       if(d.url.indexOf('http://m.vk.com/js/s_c.js')==0){
            var localFile='file://'+__dirname+"/views/jsadditive/s_c.js";
            console.log(localFile);
            c({redirectURL: localFile});
       }
       else 
            c({cancel: false}) 
    });
    
    mainWindow.loadUrl('http://m.vk.com/audios1?performer=1&q=Tonight%20alive');
    
    mainWindow.toggleDevTools();
    mainWindow.on('closed', function() {
        mainWindow.removeAllListeners();   
        mainWindow = null;
    });
  });
}) ();