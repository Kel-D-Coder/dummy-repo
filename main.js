const { readFile, writeFile } = require('fs')

readFile('./files/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log(result)
})

writeFile("./files/first.txt", 'This is from kelvin', "utf-8", (err, _) => {
    if (err) {
        console.log(err)
    }
    console.log("file has been written")
})