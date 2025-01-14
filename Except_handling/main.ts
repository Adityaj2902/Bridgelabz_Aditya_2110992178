function divideNumbers(a: number, b: number): number {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed!");
        }
        return a / b;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
        return NaN; // Returning NaN if division fails
    } finally {
        console.log("Execution completed.");
    }
}

console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); // NaN (Error handled)
