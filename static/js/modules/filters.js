var events = require('./events.js');

var renderFilters = function(e) {
    $('#candidate-filters select').chosen();
};

module.exports = {
    init: function() {
        events.on('bind:browse', renderFilters);
    }
};
