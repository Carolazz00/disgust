function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  noLoop(); // Opzionale
}

function draw() {
  clear(); // Non cancellare!
}
let grafiche = [];
let lettere=[]
/** @type {Font} */
let font;
let angle1 = 0;
let angle2 = 0;
let speed1 = 0.01; 
let speed2 = 0.03; 
function preload() {
  grafiche = [
    
    {
      posizione: {
        riga: 1,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/B-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/B-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/B-3.svg"),
        angolo: 2,
      },
    },
    
     {
      posizione: {
        riga: 2,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/D-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/D-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/D-3.svg"),
        angolo: 2,
      },
    },
   
  

    {
      posizione: {
        riga: 3,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/A-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/A-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/A-3.svg"),
        angolo: 2,
      },
    },
  
  
 
     {
      posizione: {
        riga: 4,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/C-1.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/C-2.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/C-3.svg"),
        angolo: 2,
      },
    },
    
  ];

  font = loadFont("./fonts/EMOLAND REGULAR_0.TTF");
}

function setup() {
  createCanvas(400, 500, SVG);
  addDownloadButton();
  imageMode(CENTER);
}

function draw() {
  let lettere = [
    { char: "D", riga: 1, colonna: 1 },
    { char: "I", riga: 1, colonna: 3 },
    { char: "S", riga: 2, colonna: 2 },
    { char: "G", riga: 2, colonna: 3 },
    { char: "U", riga: 3, colonna: 1 },
    { char: "S", riga: 3, colonna: 3 },
    { char: "T", riga: 4, colonna: 1 },
    { char: "O", riga: 4, colonna: 2 },
  ];

  clear();
  background("white");

  angle1 += speed1;
  angle2 += speed2;


  for (let grafica of grafiche) {
    disegnaGrafica(grafica);
  }

  textFont(font);
  textSize(110);
  fill("#5f3791");
  textAlign(CENTER, CENTER);

  for (let lettera of lettere) {
    let x = lettera.colonna * 100;
    let y = lettera.riga * 100 - 10; 
    text(lettera.char, x, y);
  }
}

  for (let grafica of grafiche) {
    disegnaGrafica(grafica);
  }

function disegnaGrafica(grafica) {
  let x = grafica.posizione.colonna * 100;
  let y = grafica.posizione.riga * 100;

  // 呼吸动画：在 1 和 1.1 之间浮动
  let scaleFactor = 1 + 0.1 * sin(millis() * 0.005 + x + y); 
  // 使用 x+y 加个偏移，让每个图形的缩放略有不同，避免太一致

  // 三层图形绘制
  for (let livello of ["sotto", "centro", "sopra"]) {
    push();
    translate(x, y);
    rotate(angle1 * grafica[livello].angolo);
    scale(scaleFactor);
    image(grafica[livello].svg, 0, 0, 150, 150);
    pop();
  }
}