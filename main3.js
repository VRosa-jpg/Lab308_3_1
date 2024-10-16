// CSV
let values = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// Array => Rows of info
let str = values.split('\n').slice(0)

for (const row of str) {
    let newStr = row.split(',').slice(0)
    console.log(newStr)
}


