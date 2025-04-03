// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    windowTools: (args) => {
        return ipcRenderer.invoke('windowTools', args)
    },
    onUpdate: (callback) => {
        ipcRenderer.on('update', (_event, value) => callback(value))
    }
});