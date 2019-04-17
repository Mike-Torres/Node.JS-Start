// ES 6


// const square = (x) => {
//     return x * x 
// }

// console.log(square(2))

// const square = (x) => x * x 

// console.log(square(2))


// THIS IS NOT THE WAY YOU USE ARROW FUNCTION 
// Arrow Function does not BIND to THIS.
const event = {
    name: "Birthday Party",
    printGuestList: () => {
        console.log('Guest list for ' + this.name)
    }
}

event.printGuestList()


// In this case regular function DOES BIND TO This.name
// Normal Functions BIND to THIS
const events = {
    name: "Birthday Party",
    printGuestList: function() {
        console.log('Guest list for ' + this.name)
    }
}

events.printGuestList()