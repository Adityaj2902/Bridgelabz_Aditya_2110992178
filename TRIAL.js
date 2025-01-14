function divideNumbers(a, b) {
    try {
        if (b == 0) {
            throw new Error("Division By Zero is Not Allowed");
        }
        return a / b;
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error : ".concat(error.message));
        }
        return NaN;
    }
    finally {
        console.log("Execution Completed");
    }
}
console.log(divideNumbers(10, 0));
