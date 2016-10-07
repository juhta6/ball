var page = new tabris.Page({
  topLevel: true
});

var toolbar = tabris.ui.set("toolbarVisible", false);

var movehor = 75;
var movever = 50;
var sizew = 10;
var sizeh = 10;
var background = [];

var comp = new tabris.Composite({
  layoutData: {top: 0, bottom: 0, left: 0, right: 0},
  highlightOnTouch: true,
  background: "transparent"
}).on("longpress", function(widget, event){
  movehor = 75
  movever = 50
  sizew = sizew
  sizeh = sizeh
  character.set({layoutData: {left: (movehor) * 2, top: (movever) * 2, width: (sizew) * 5, height: (sizeh) * 5}})
}).on("pan:left", function(widget){
  character.set({layoutData: {left: (--movehor) * 2, top: (movever) * 2, width: (sizew) * 5, height: (sizeh) * 5}})
}).on("pan:right", function(widget){
  character.set({layoutData: {left: (++movehor) * 2, top: (movever) * 2, width: (sizew) * 5, height: (sizeh) * 5}})
}).on("pan:up", function(widget){
  character.set({layoutData: {top: (--movever) * 2, left: (movehor) * 2, width: (sizew) * 5, height: (sizeh) * 5}})
}).on("pan:down", function(widget){
  character.set({layoutData: {top: (++movever) * 2, left: (movehor) * 2, width: (sizew) * 5, height: (sizeh) * 5}})
}).appendTo(page);


new tabris.Composite({
  layoutData: {bottom: 10, left: 10, width: 40, height: 40},
  highlightOnTouch: true,
  background: background
  }).on("tap", function(widget, background){
  this.set("background", "blue")
  character.set("background", background)
}).appendTo(comp)
var character = new tabris.ImageView({
  image: {src: "http://www.iconsdb.com/icons/preview/black/circle-xxl.png", centerX: 0, centerY: 0}
}).on("longpress", function(widget){
  this.set({layoutData: {left: (movehor) * 2, top: (movever) * 2, width: (--sizew) * 5, height: (--sizeh) * 5}})
}).on("tap", function(widget){
  this.set({layoutData: {left: (movehor) * 2, top: (movever) * 2, width: (++sizew) * 5, height: (++sizeh) * 5}})
}).appendTo(comp);

new tabris.TextView({
  layoutData: {right: 50, left: 50, centerY: 0},
  text: "Move finger on screen to move the ball, tap the ball to grow and hold down the ball to shrink and screen to reset the location",
  alignment: "center",
  textColor: "white",
  font: "19px"
}).appendTo(comp)

new tabris.TextView({
  layoutData: {right: 50, left: 50, centerY: 0},
  text: "Move finger on screen to move the ball, tap the ball to grow and hold down the ball to shrink and screen to reset the location",
  alignment: "center",
  textColor: "gray",
  font: "19px"
}).appendTo(page)

new tabris.Button({
  layoutData: {bottom: 10, centerX: 0, width: 100},
  highlightOnTouch: "true",
  text: "reload"
}).on("select", function() {
  tabris.app.reload();
}).appendTo(page);

page.open();
      
