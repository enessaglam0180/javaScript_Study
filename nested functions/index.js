// nested functions = Functions inside other functions.
//                  Outer functions have access to inner function.
//                  Inner functions are "hidden" from outside the outer function.
//                  Used in closures(future video topic )

let userName="Bro";
let userInbox=0;

login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }

}