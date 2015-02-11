var net = require('net');
var carrier = require('carrier');
var Message = require('./message');

/**
 *
 */
function IRCd() {}

/**
 *
 */
IRCd.prototype.start = function() {
    net.createServer(this.handleClient.bind(this)).listen(6667);
};

IRCd.prototype.handleClient = function(client) {
    var self = this;
    // Using carrier to read in lines
    var carry = carrier.carry(client);

    carry.on('line', function(line) {
        var message = self.parse(line);
        console.log(message);
    });
}

/**
 *
 */
IRCd.prototype.parse = function(data) {
    var parts = data.trim().split(' ');

    return new Message(parts[0], parts.slice(1));
}

module.exports = IRCd;