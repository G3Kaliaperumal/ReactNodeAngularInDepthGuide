const iterator = (function() {
    return {
        forEach: function(list) {
            for(let i = 0; i < list.length; i++) {
                console.log(list[i]);
            }
        }
    }
})();

module.exports = iterator;