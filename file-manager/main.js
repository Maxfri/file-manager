import {
  printWelcomeMessage,
  printCurrentDirectory,
  getUserHomeDirectory,
} from "./utils.js";
import { handleInput } from "./inputHandler.js";

// Get the username from the command-line arguments
const usernameArg = process.argv.find((arg) => arg.startsWith("--username="));
const username = usernameArg ? usernameArg.split("=")[1] : "User";

// Display the welcome message
printWelcomeMessage(username);

// Set the initial working directory to the user's home directory
let currentDirectory = getUserHomeDirectory();

// Display the current working directory
printCurrentDirectory();

// Call the handleInput function to start handling command-line input
handleInput(username);
