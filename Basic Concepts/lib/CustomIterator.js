const Promise = require('./Promise');
// const { Observable } = require('rxjs');
const Observable = require('./Observable');

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
        getMethod3DBdata: function() {
            // To know more view the link https://rxjs-dev.firebaseapp.com/guide/observable
            return new Observable((observer) => {
                setTimeout(() => {
                    observer.next('Data 1');
                    observer.next('Data 2');
                    // To invoke error function call back. The following lines will not be executed in this case too.
                    // observer.error();
                    observer.complete();
                    // The following observers will not be executed anymore because of complete() function call
                    observer.next('Data 3');
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
