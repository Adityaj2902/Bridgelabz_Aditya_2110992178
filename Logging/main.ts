// Logging involves tracking the flow of an application and capturing 
// errors or events. Using a dedicated logger class or a package like 
// winston can be helpful for large applications.


class Logger {
    static logInfo(message: string): void {
        console.log(`INFO: ${message}`);
    }

    static logError(message: string): void {
        console.error(`ERROR: ${message}`);
    }

    static logWarn(message: string): void {
        console.warn(`WARN: ${message}`);
    }
}

function processData(data: string): void {
    Logger.logInfo("Processing data...");

    if (!data) {
        Logger.logError("No data provided");
        return;
    }

    Logger.logInfo("Data processed successfully");
}

processData(""); // Logs an error for empty data
processData("Valid data"); // Logs info for valid data


// Explanation:

// Logger class encapsulates different log levels (info, error, and warn).
// This allows us to separate concerns and easily manage log outputs, making debugging and maintenance easier.