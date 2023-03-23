class Ship{
    constructor(){
    this.currentPort = 'Amsterdam'
    }
    dock(port){
        this.currentPort = port
    }
    setSail(){
        this.currentPort = null;
    }
};

module.exports = Ship