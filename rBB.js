function randomBinary () {
    return new Date().getMilliseconds() % 2
}
        
function random (min, max) {
    do {
        var binaryString = ''
        for (var i = 0; i < max.toString(2).length; i++) {
            binaryString += randomBinary()
        }            
    } while ( (min > parseInt(binaryString, 2)) || (max < parseInt(binaryString, 2)) )
    return parseInt(binaryString, 2)
}
