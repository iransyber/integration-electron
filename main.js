const { app , BrowserWindow} = require('electron');
const path = require('path');

let mainWindow = null

function initialize() {
    function createMainWindow(){
        const winOption = {
            width: 1080,
            minWidth: 680,
            height: 840,
            title: app.getName(),
            frame:false,
            webPreferences: {
              nodeIntegration: true
            }
        }
    
        mainWindow = new BrowserWindow(winOption)
        mainWindow.loadURL(path.join('file://', __dirname, 'index.html'))
    }

    app.on('ready', () => {
        createMainWindow();
    })    
}
initialize();