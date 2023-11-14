import * as PIXI from 'pixi.js';
import './stay-pixel-font.css';
import FontFaceObserver from 'fontfaceobserver';
let font = new FontFaceObserver('StayPixel', {});

font.load().then(() => {


  // Create the application
  const app = new PIXI.Application({
    width: window.innerWidth, // Width of the canvas
    height: window.innerHeight, // Height of the canvas
    backgroundColor: 0xABA8B2, // Background color
  });

  // Add the canvas that Pixi automatically created for you to the HTML document
  document.body.appendChild(app.view as HTMLCanvasElement);

  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    app.renderer.resize(newWidth, newHeight);

    if (app.view && app.view.style) {
        app.view.style.width = newWidth + 'px';
        app.view.style.height = newHeight + 'px';
    }

    // Update the position of the text element
    text.x = newWidth / 2-text.width/2;

    // Optionally, update the positions/sizes of other elements
    // rectangle.x = ...;
    // rectangle.y = ...;
  });



  // Create a new graphics object and draw a rectangle
  const rectangle = new PIXI.Graphics();
  rectangle.lineStyle(4, 0xC44900, 1);
  rectangle.beginFill(0x415A77);
  rectangle.drawRoundedRect(0, 0, window.innerWidth-80, window.innerHeight-40, 20);
  rectangle.endFill();
  

  // Position the rectangle
  rectangle.x = 40;
  rectangle.y = 20;



  let style = new PIXI.TextStyle({
    fontFamily: 'StayPixel',
    fontSize: 100,
    fill: '#F9F8DC'
  });

  let text = new PIXI.Text('FBLA Game', style);
  text.x = window.innerWidth/2-text.width/2;
  text.y = 20;



  // Add the rectangle to the stage
  app.stage.addChild(rectangle);
  app.stage.addChild(text);
}, () => {
  // Failed load, log the error or display a message to the user
  alert('Unable to load Stay Pixel font!');
});