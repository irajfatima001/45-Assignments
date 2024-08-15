"use strict";
// //No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// * If the list is empty, print the message We need to find some users!
// * Remove all of the usernames from your array, and make sure the correct message is printed.
let array = ["user1", "user2", "user3", "user4", "user5"];
// for(let i=0; i >= array.length; i++){
//     array.pop()
// }
while (array.length > 0) {
    array.pop();
}
if (array.length == 0) {
    console.log("we need to find some users.");
}
