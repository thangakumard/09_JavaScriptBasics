function StopWatch(){
    let running = false;
    let startTime = 0;
    let stopTime = 0;

    this.start = function(){
        if(running){
            throw new Error(`Stopwatch is already running!`);
        }else{
            startTime = Date.now();
            running = true;
            console.log(`Stopwatch has started!`);
        }
    }
    this.stop = function(){
        if(running){
            stopTime = Date.now();
            running = false;
            console.log(`Stopwatch is stopped!`);
        }else{
            throw new Error(`Stopwatch is not running!`);
        }
    }
    this.reset = function(){
         startTime = 0;
         stopTime = 0;
         running = false;
    }
    this.duration = function(){
        let window = stopTime - startTime;
        console.error(`Duration is ${window}`);
    }
}