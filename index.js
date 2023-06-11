const { app, BrowserWindow } = require('electron');
const path = require('path');
const openInDeveloperMode = true;
function createWindow() {
   const win = new BrowserWindow({
      width: 1920,
      height: 1080,
      minWidth: 1920,
      minHeight: 1080,
      webPreferences: {
         nodeIntegration: true,
         contextIsolation: false,
         preload: path.join(__dirname, './loginPreload.js')
      },
      title: 'EventHive'
   });
   win.maximize();
   if (openInDeveloperMode) win.webContents.openDevTools();
   win.loadFile(path.join(__dirname, './login.html'));
}
app.whenReady().then(() => {
   createWindow();
   app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
   });
});
app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit();
});