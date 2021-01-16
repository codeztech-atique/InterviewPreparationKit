const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

debounceBtn.addEventListener('click', debounce(function() {
    console.info('Hey! It is', new Date().toUTCString());
}, 3000));


const debounce = (func, delay) => {
    let isDebouce;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(isDebouce);
        isDebouce = setTimeout(() => func.apply(context, args), delay)
    }
}

debounceBtn.addEventListener('click', debounce(function() {
   console.log('Hey it is', new Date().toUTCString());
}));