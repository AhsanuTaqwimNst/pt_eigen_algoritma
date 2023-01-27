var INPUT = ['xc', 'dz', 'bbb', 'dz', 'dz']  
var QUERY = ['bbb', 'ac', 'dz']

var output = []


for (let i = 0; i < QUERY.length; i++) {
    output[i]= 0

    for (let y = 0; y < INPUT.length; y++) {
        

        if (QUERY[i] == INPUT[y] ) {
            output[i] += 1
        }
    }
}
 console.log(output);
