class Ship{
    constructor(){
    this.currentPort = 'Amsterdam'
    }
    dock(port){
        this.currentPort = port
    }
}

Ship.prototype.setSail = function (){
   this.currentPort = null
}



module.exports = Ship