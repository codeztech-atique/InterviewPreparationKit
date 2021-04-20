const debounce =  (func, delay) => {
    let isDebounce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(isDebounce);
        isDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

debounceBtn.addEventListener('click', debounce(function() {
    console.info('Hey! It is', new Date().toUTCString());
}, 3000));

const throttle = (func, limit) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
}

throttleBtn.addEventListener('click', throttle(function() {
    return console.log('Hey! It is', new Date().toUTCString());
}, 1000));