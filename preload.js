const testMgr = require("./models/testmgr");
const { contextBridge } = require("electron")

const getNames = () => {
    return testMgr.getNames();
}

const addName = (name) => {
    testMgr.addName(name);
}


contextBridge.exposeInMainWorld("api", {
    getNames: getNames,
    addName: addName
})