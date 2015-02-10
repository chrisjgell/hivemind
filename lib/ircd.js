var net = require('net');
var carrier = require('carrier');

exports.start = function(options) {
    var server;
    var connListener;

    /**
     * 
     */
    connListener = function(conn) {
        // Using carrier to read in lines
        var carry = carrier.carry(conn);

        carry.on('line', function(line) {
            console.log(line);
        });    
    };

    /**
     * 
     */
    server = net.createServer(connListener);

    /**
     * 
     */
    server.listen(process.env.PORT | 6667);
}