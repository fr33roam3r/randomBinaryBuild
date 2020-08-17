function randomBinary () {
    return new Date().getMilliseconds() % 2
}
        
function random (min, max) {
	// If binary string is not even numbered, add a zero to the start of it.
	if ((max.toString(2) % 2) !== 0) {
    	binaryMax = '0' + max.toString(2)
    } else if (max.toString(2) % 2 === 0) {
    	var binaryMax = max.toString(2)
    }
    
    do {
    	var mainBinaryString = ''
    	for (var i = 0; i < 2; i++) {
            // Twice to get the results XOR'd
    		do {
                // First round
        		var subBinaryString = ''
        		for (var j = 0; j < binaryMax.length; j++) {
            		subBinaryString += randomBinary()
                }
        	} while ((min > parseInt(subBinaryString, 2)) || (max < parseInt(subBinaryString, 2)))
            // Second round
        	for (var k = 0; k < subBinaryString.length; k++) {
            	if ((k % 2) === 0) {
					mainBinaryString += (parseInt(subBinaryString[k]) ^ parseInt(subBinaryString[k + 1]))   			
                }
            }
    	}
        // Check if XOR'd number fits range
    } while ((min > parseInt(mainBinaryString, 2)) || (max < parseInt(mainBinaryString, 2)))
    
    return parseInt(mainBinaryString, 2)
}
