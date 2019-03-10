let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width = 600;
let height = canvas.height = 600;
let pi = document.getElementById("pi");




const random = (min,max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.color = "white";
        this.width = 2;
        this.height = 2;
    }


    drawPoint(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    pointDistance(){
        let distance = Math.sqrt(Math.pow((300 - this.y),2) + Math.pow((300 - this.x),2));
   
       
        if(distance <= 300){
            return true;
        } else {
            return false;
        }


    }
}


class Circle {
    constructor(){
        this.x = width / 2;
        this.y = height / 2;
        this.radius = 300;
    }


    drawCircle(){
        ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
        ctx.fill();
    }

}


let circle = new Circle();
circle.drawCircle();

let points = [];
let totalPoints = 0;
let insidePoints = 0;

const updateGame = () => {
    totalPoints = 0;
    insidePoints = 0;
    let point = new Point(random(0,width),random(0,height));
    points.push(point);

    for(let x in points){
        points[x].drawPoint();
        

        if(points[x].pointDistance()){
          
            totalPoints++;
            insidePoints++
        } else {
           totalPoints++
        }
    }
    pi.innerHTML =   4 * (insidePoints / totalPoints);
}





let stopBtn = document.getElementById("btn");
let startBtn = document.getElementById("btn2");
let interval;



const startGame = () => {
    
   interval = setInterval(() => {
        updateGame();
    },100)
    }
    


const startFunc = () => {
    
     interval = setInterval(() => {
        updateGame();
    },100)
    
    stopBtn.style.display = "inline-block";
    startBtn.style.display = "none";  
}


const stopFunc = () => {
    console.log("stop");
    clearInterval(interval);
    stopBtn.style.display = "none";
    startBtn.style.display = "inline-block";
}

