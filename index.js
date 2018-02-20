const electron = require('electron');
const mb = require('menubar');

var config = {
  index: "https://web.whatsapp.com/",
  tooltip: "WhatsBar",
  icon: __dirname + "/icon.png",
  width: 760,
  height: 540
}

var menubar = mb(config);