let board = document.getElementsByClassName("snakeGarden")[0];
console.log(board);
let score  = document.getElementsByClassName("score")[0];
let highScore = document.getElementsByClassName("highScore")[0];
let snake =  [{x:35,y:16}];
let food=generateFood();
console.log("this");
console.log(snake[0]);

function draw() {
    board.innerHTML = "";
    drawSnake();
    drawfood();
   
    
};
let game = false;
let snakespeed =100;
function drawfood() {
    const foodElement = CreateGameElement("div","food");
    setPosition(foodElement,food);
    board.appendChild(foodElement);
   
}

function drawSnake() {
    snake.forEach((segment) => {
      const snakeElement = CreateGameElement("div","snake"); 
      setPosition(snakeElement,segment);
      
      board.appendChild(snakeElement);
    });
}
function CreateGameElement(element,className) {
    let s= document.createElement(element);
    s.className = className;
    return s;
}
function setPosition(element,pos) {
    element.style.gridColumn = pos.x;
    element.style.gridRow = pos.y;
}
function generateFood(){
    let x = Math.floor((Math.random() * 69) + 1);
    let y = Math.floor((Math.random() * 33) + 1);
    return {x,y};
}

let direction="up" ;
function snakeMove(){
 
    const snakec = Object.assign({}, snake[0]);
    
    console.log(snakec);

    // let s = CreateGameElement("div","snake");
    // setPosition(s,snakec);
 
 switch (direction) {
    case "up":
        snakec.y--;
        break;
        case "down":
        snakec.y++;
        break;
        case "left":
        snakec.x--;
        break;
    default:
        
        snakec.x++;
        break;
        
   }
   console.log(snakec.y);

   
   console.log(snake);
//    console.log(snake[0].y);
//    console.log(snake);
    
  
   
    if (!(snakec.x === food.x && snakec.y === food.y)) {
        snake.unshift(snakec);
        snake.pop();
    }
    else{
        snake.unshift(snakec);
        food=generateFood();
    }
    snake.forEach(element => {
       if(snake[0].x == snake.x && snake[0].y == snake.y){
        food=generateFood();
        let highs = highScore.innerHTML;
        let sscore =score.innerHTML;
        if(sscore > highs){
            highScore.innerHTML =score.innerHTML;
        }
     
        snake = [{x:35,y:16}];
       }
    });
    if((snake[0].x < 0 ||snake[0].y < 0) || (snake[0].x >69|| snake[0].y > 33) ){
        
        food=generateFood();
        let highs = highScore.innerHTML;
        let sscore =score.innerHTML;
        if(sscore > highs){
            highScore.innerHTML =score.innerHTML;
        }
     
        snake = [{x:35,y:16}];
    }
}




function keypress(){
document.addEventListener("keydown",(e)=>{
    console.log(e.key);
switch (e.key) {
   
    case "ArrowUp":
        direction = "up"
        break;
        case 'ArrowDown':
            direction = "down"
            break;
            case 'ArrowLeft':
                direction = "left"
                break;

                case 'ArrowRight':
        direction = "right"
        break;

    default:
        break;
}
})
}
function ScoreCal() {
    score.innerHTML = (snake.length) ;
    
}

let start =  document.getElementsByClassName("start")[0];
function startGame(){
    start.addEventListener("click",()=>{
        game = true;
        console.log("game started");
    })
}


    let intid = setInterval(() => {
        snakeMove();
        draw();
        keypress();
        ScoreCal();
        incSpeed()
    }, snakespeed);
    draw();

