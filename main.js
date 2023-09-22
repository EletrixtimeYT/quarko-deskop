

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 800,
    height: 600
  })

  win.loadFile('src/index.html')
}

app.whenReady().then(() => {
 
  createWindow()
})