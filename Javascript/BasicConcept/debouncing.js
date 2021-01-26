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
