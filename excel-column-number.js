function excelColumnNumber(columnName) {
    let result = 0;
    let length = columnName.length;
    
    for (let i = 0; i < length; i++) {
        let letterValue = columnName.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + letterValue;
    }
    
    return result;
}

// beispiele
console.log("Testfälle für excelColumnNumber:");
console.log("A ->", excelColumnNumber("A"));
console.log("AB ->", excelColumnNumber("AB"));
console.log("ZY ->", excelColumnNumber("ZY"));
console.log("AAA ->", excelColumnNumber("AAA"));
console.log("FXSHRXW ->", excelColumnNumber("FXSHRXW"));
console.log("BA ->", excelColumnNumber("BA"));
console.log("CCC ->", excelColumnNumber("CCC"));
console.log("ZZZ ->", excelColumnNumber("ZZZ"));
