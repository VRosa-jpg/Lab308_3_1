
// The string to tear up
let values = "ID,Name,Occupation,Age,ear\n42,Bruce,Knight,41,head\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Splits each newline into a row and puts them each into one big array
let rows = values.split('\n')

// Empty array to stuff everything in
results = []

// loop through the string and making it an array and pushes each arry into results so we can later manipulate each row for columns
for (let i = 0; i < rows.length; i++) {
    eachRow = rows[i].split(',')
    results.push(eachRow)
}

// console.log(results)

// Part 2

// Make eachRow's length match the first the first rows lengths(columns)
columns = results[0].length // 4

// If eachRow is smaller than columns add empty spaces to macth column // This only adds to last row because of the first for loop
// for (let i = 0; columns > i; i++) {
//     if (columns > eachRow.length) {
//         eachRow.push(0)
//     }
// }

for (let i = 0; i < results.length; i++){
    while(results[i].length < columns) {
        results[i].push(0)
    }
}
console.log(results)