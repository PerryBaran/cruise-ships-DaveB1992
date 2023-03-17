/*
As a cruise ship captain,
So I can get passengers aboard a ship,
I want a ship to have a starting port.
*/
const port = 'Dover'

function ship() {
    this.startingPort = port

}

module.exports = ship