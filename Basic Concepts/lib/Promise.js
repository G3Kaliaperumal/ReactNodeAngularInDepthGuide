class Promise {
  
  constructor(executionFunction) {
    this.promiseChain = [];
    this.handleError = () => {}
    
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executionFunction(this.onResolve, this.onReject);
  }

  then(callback) {
    this.promiseChain.push(callback);
    return this;
  }

  catch(handleError) {
    this.handleError = handleError;
    return this;
  }

  onResolve(value) {
    this.storedValue = value;

    try {
      this.promiseChain.forEach(nextFunction => {
        this.storedValue = nextFunction(this.storedValue);
      });
    } catch (error) {
      this.promiseChain = [];
      this.onReject(error);
    }
  }

  onReject(error) {
    this.handleError(error);
  }
}

module.exports = Promise;
