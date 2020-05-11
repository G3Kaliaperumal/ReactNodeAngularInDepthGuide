const iterator = (function() {
    return {
        // To replicate back-end service calls
        getDBdata: function(callback) {
          // asynchronous function calls
          setTimeout(() => {
            const data = 'Data from DB!';
            callback(data);
          }, 3000);
        },
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
