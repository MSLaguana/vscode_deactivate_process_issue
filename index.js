var vscode = require("vscode");
var child_process = require("child_process");
var path = require("path");

var cProc;

function createChild() {
    cProc = child_process.spawn(path.join(__dirname,"child.cmd"));
}

function cleanupChild() {
    if (cProc) {
        cProc.kill();
        child_process.exec("taskkill /pid " + cProc.pid + " /T /F");
        cProc = null;
    }
}

function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand(
        "test.spawn_child_process",
        createChild
    ));
    context.subscriptions.push(vscode.commands.registerCommand(
        "test.kill_child_process",
        cleanupChild
    ));
}

function deactivate() {
    console.log("Deactivating");
    cleanupChild();
}

exports.activate = activate;
exports.deactivate = deactivate;