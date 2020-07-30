function randomBinary () {
    var milliseconds = new Date().getMilliseconds().toString().split('')
    return Number(milliseconds[2]) % 2
}
        
function randomBinaryBuild (min, max) {
    do {
        var binaryString = ''
        for (var i = 0; i < max.toString(2).length; i++) {
            binaryString += randomBinary()
        }            
    } while ( (min > parseInt(binaryString)) || (max < parseInt(binaryString)) )
    return parseInt(binaryString)
}
