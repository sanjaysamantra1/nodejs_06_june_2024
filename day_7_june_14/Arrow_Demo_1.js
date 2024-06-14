let user = {
    firstName: 'Sachin',
    lastName: 'Tendulkar',
    fullName1: function () { // Regular 
        // this = user  (this method called with user object)
        console.log(this.firstName + " " + this.lastName)
    },
    fullName2: () => {  // Arrow
        // this = where this function is written
        console.log(this.firstName + " " + this.lastName)
    }
}
user.fullName1();
user.fullName2();