const debounce1 = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout(() => func.apply(context, args), delay)
    }
}

debounceBtn.addEventListener('click', debounce1(function() {
    console.info('Hey! It is', new Date().toUTCString());
}, 3000));

const debounce = (func, delay) => {
  let debounce;
  return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounce) 
      debounce = setTimeout(() => func.apply(context, args), delay)
  }   
}