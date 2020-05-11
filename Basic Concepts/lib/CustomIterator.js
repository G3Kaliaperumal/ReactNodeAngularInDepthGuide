const iterator = (function() {
    return {
        getCurrentDate: function(callback) {
          const date = new Date().toLocaleString();
          callback(date);
        },
        forEach: function(list) {
            for(let i = 0; i < list.length; i++) {
                console.log(list[i]);
            }
        }
    }
})();

module.exports = iterator;
