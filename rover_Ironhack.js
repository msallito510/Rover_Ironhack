
// Rover Object Goes Here
// ======================

// Iteration 1 | The Rover Object
let rover = {
  name: "",
  direction: ["N", "E", "S", "W"],
  position: {
    x: 0,
    y: 0
  },
  travelLog: [0,0],  //Iteration 5 | Tracking
  obstaclePosition: {
    x: null,
    y: null
  }
};

// ======================

class MyRover {

  constructor(rover, name){
    this.name = name;
    this.currentDirection = rover.direction[0];
    this.currentPosition = [rover.position.x, rover.position.y];
    this.travelLog = rover.travelLog;
    this.ramObstaculeX = Math.floor(Math.random() * 10) + 1;
    this.ramObstaculeY = Math.floor(Math.random() * 10) + 1;
  }

  // Iteration 2 | Turning the Rover
  turnLeft(rover){  
    console.log("\nturnLeft was called by! " + this.name);
    this.setNewDirection('l');
    console.log(`=> Current Position is: [${this.currentPosition}]\n`);
  }

  turnRight(rover){
    console.log("\nturnRight was called by! " + this.name);
    this.setNewDirection('r');
    console.log(`=> Current Position is: [${this.currentPosition}]\n`);
  }

  // Iteration 3 | Moving the Rover
  moveForward(rover){
  console.log("\nmoveForward was called by! " + this.name);

  switch(this.currentDirection){
    case 'N':
    if(this.isOnPositionY(rover.position.y -= 1)){
      this.currentPosition[1] -= 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');		
    }
      break;
    case 'S':
    if(this.isOnPositionY(rover.position.y += 1)){
      this.currentPosition[1] += 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes Forward to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');
    }
      break;
    case 'E':
    if(this.isOnPositionX(rover.position.x += 1)){
      this.currentPosition[0] += 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');
    }
      break;
    case 'W':
    if(this.isOnPositionX(rover.position.x -= 1)){
      this.currentPosition[0] -= 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes to position: [${this.currentPosition}]`); 
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');
    }
      break;
    default: 
      console.log("this is an invalid direction");
  }
  
	console.log(`=> Current Direction is: '${this.currentDirection}'`);
    console.log(`=> Current Position is: [${this.currentPosition}]`);
}

//Iteration 4 | Commands
moveRover(commands){
  this.obstaculePosition();      
  for(let i=0; i<=commands.length-1; i++){
    switch(commands[i]){
      case 'l':
        this.turnLeft(rover);
        break;
      case 'r':
        this.turnRight(rover);
        break;
      case 'f':
        this.moveForward(rover);
        break;
        case 'b':
        this.moveBackwards(rover);
        break;
      default:
      // Bonus 3 | Validate Inputs
        console.log(`=> The command '${commands}' is not valid`)
        break;
    }
  }
  this.showHistoryTravel();
}

// Bonus 1 | Enforce Boundaries
//===== start Bonus 1 =====
  isOnPositionY(y){
    let isPositionOk = false;
    
    if(y >= 0 && y <= 10 && !this.hasAnObstacle(rover.position.x, y)){      
      isPositionOk = true;
    }
    else{
      isPositionOk = false;
    } 
    return isPositionOk;
  }

  isOnPositionX(x){
    if(x >= 0 && x <= 10 && !this.hasAnObstacle(x, rover.position.y)){      
      return true;
    }
    else 
      return false;
  }
//===== end Bonus 1 =====

// Bonus 2 | Move Backwards
//===== start Bonus 2 =====
  moveBackwards(rover){
  console.log("\nmoveBackwards was called by! " + this.name);

  switch(this.currentDirection){
    case 'N':
    if(this.isOnPositionY(rover.position.y += 1)){
      this.currentPosition[1] += 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes Backwards to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');
    }    
      break;
    case 'S':
    if(this.isOnPositionY(rover.position.y -= 1)){
      this.currentPosition[1] -= 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes Backwards to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');        
    }      
      break;
    case 'E':
    if(this.isOnPositionX(rover.position.x -= 1)){
      this.currentPosition[0] -= 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes Backwards to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');	
    }	
      break;
    case 'W':
    if(this.isOnPositionX(rover.position.x += 1)){
      this.currentPosition[0] += 1;
      this.travelLog.push(this.currentPosition);
      console.log(`=> Rover goes Backwards to position: [${this.currentPosition}]`);
    } else {
        console.log('\n WARNING! It is not possible to move the Rover to that position');
    }	
      break;
    default: 
      console.log("this is an invalid direction");
  }
	console.log(`=> Current Direction is: '${this.currentDirection}'`);
	console.log(`=> Current Position is: [${this.currentPosition}]`);
}
//===== end Bonus 2 =====

//Bonus 4 | Obstacles
//===== start Bonus 4 =====
// Obstacules
  hasAnObstacle(x, y){
    if(x === rover.obstaclePosition.x && y === rover.obstaclePosition.y ){
      console.log(`\n Upss! there is an obstacle in position [${x},${y}] - select another direction\n`);
      return true;  // there is an obstacle in position [x,y]
    } else 
        return false;
  }
//===== end Bonus 4 =====

// ==============================
// ===== region My Functions ====
// ==============================

  setNewDirection(newDirection){

    console.log(`=> Previous Direction '${this.currentDirection}'`);
    switch(newDirection){
      case 'l':
        if(rover.direction.indexOf(this.currentDirection) - 1 < 0){        
          this.currentDirection = rover.direction[3];        
        }
        else{
          this.currentDirection = rover.direction[rover.direction.indexOf(this.currentDirection) - 1];
        } 
        break;
      case 'r':
      if(rover.direction.indexOf(this.currentDirection) + 1 > rover.direction.length - 1){
          this.currentDirection = rover.direction[0];
        }
        else{
          this.currentDirection = rover.direction[rover.direction.indexOf(this.currentDirection) + 1];
        } 
        break;
    }

    console.log(`=> Current Direction: '${this.currentDirection}'`);
    return this.currentDirection; 
  }

  obstaculePosition(){
    rover.obstaclePosition.x = this.ramObstaculeX;
    rover.obstaclePosition.y = this.ramObstaculeY;

    console.log(`\n\n* Hello ${this.name}! be careful, there is an obstacle in the position [${rover.obstaclePosition.x}],[${rover.obstaclePosition.y}]`);
  }

  showHistoryTravel(){	
    console.log(`\n=> ${this.name}'s history travel: [${this.travelLog}]`);
  }
}

roverOne = new MyRover(rover, "ROVER_ONE");
roverTwo = new MyRover(rover, "ROVER_TWO");
roverThree = new MyRover(rover, "ROVER_THREE");

roverOne.moveRover('rffff');
roverTwo.moveRover('bbbbbbbbbbb');
roverThree.moveRover('j');
