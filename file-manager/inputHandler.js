import readline from "readline";
import { executeCommand } from "./commands.js";

function handleInput(username) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.prompt();

  rl.on("line", (line) => {
    const command = line.trim();
    if (command === ".exit") {
      rl.close();
      return;
    }

    executeCommand(command);
    rl.prompt();
  }).on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
}

export { handleInput };
