const electron = require("electron");
const url = require("url");
const path = require("path");

const { app } = electron;

let mainwindow;

app.on("ready", () => {
    alert("test");
});