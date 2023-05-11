// GLOBALS - NO WINDOW !!!!

// __dirname - path to current working directory
// __filename - file name
// require - function tu use modules (CommonJS)
// module - info about the current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log('hello world!')
}, 1000)