function converterKgParaLibras() {
    
    var inputKg = document.getElementById("inputKg");
    var resultado = document.getElementById("resultado");
    var kg = parseFloat(inputKg.value);
    var libras = kg * 2.20462;

    resultado.innerHTML = kg + " kg = " + libras.toFixed(2) + " lb";
}
const {app, BrowserWindow} = require('electron');
const { on } = require('events');
let mainWindow;

app.on('ready', ()=>{

    mainWindow = new BrowserWindow({
        width:700,
        height:400,
        resizable: false,
        
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`)
    mainWindow.removeMenu();
});
app.whenReady().then(mainWindow);

app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin') app.quit();
});

app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length === 0) createWindow();
});