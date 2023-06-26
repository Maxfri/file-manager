function getUserHomeDirectory() {
  return process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
}

function printWelcomeMessage(username) {
  console.log(`Welcome to the File Manager, ${username}!`);
}

function printCurrentDirectory() {
  const currentDirectory = process.cwd();
  console.log(`You are currently in ${currentDirectory}`);
}

export {
  getUserHomeDirectory,
  printWelcomeMessage,
  printCurrentDirectory
}