let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter another number: "));

if (isNaN(a) || isNaN(b)) {
    throw new Error("Only integers are allowed."); // error throw garyo vane ehi aayera rokinxa
    // InternalError
    // RangeError
    // ReferenceError
    // SyntaxError
    // TypeError
}

let sum = a + b;

(function main(){
    try {
        console.log("The sum is:", sum);
        return true;
    } catch (error) {
        console.log("Error has occured.");
        return false;
    }
    finally{
        console.log("Finallly, files are being closed.");
    }
})();