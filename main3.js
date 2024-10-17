
// The string to tear up
let values = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Splits each newline into a row and puts them each into one big array
let rows = values.split('\n')

// loop through each 
for (let i = 0; i < rows.length; i++) {
    eachRow = rows[i].split(',')
    console.log(eachRow)
}





