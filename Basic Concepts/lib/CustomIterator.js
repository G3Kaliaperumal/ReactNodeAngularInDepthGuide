const Promise = require('./Promise');

const iterator = (function() {
    return {
        // To replicate back-end service calls
        getMethod1DBdata: function(callback) {
          // asynchronous function calls
          setTimeout(() => {
            const data = 'Data from DB!';
            callback(data);
          }, 3000);
        },
         getMethod2DBdata: function() {
          // Promise is an object that returns value some time in the future
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const data = 'Data from DB!';
              resolve(data);
              // const errorMessage = 'Cannot connect to DB!';
              // reject(errorMessage);
            }, 3000);
          });
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
