// async = makes a function return a Promise

async function loadFile(){
    let fileLoaded = false;
    if (fileLoaded) {

        resolve("File loaded")
    }
    else{
        reject("File NOT loaded");
    }
}

async function startProcess(){
    try {
        let message = await locateFile(); //no need .then().catch        console.log(message);
        message = await loadFile(); 
        console.log(message);
        message = await closeFile(); 
        console.log(message);
    } catch (error) {
        console.log(error);
    }
  
}
startProcess();

loadFile().then(value => console.log(value))
          .catch(error => console.log(error));
