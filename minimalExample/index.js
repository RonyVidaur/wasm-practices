let squarer;

const loadWebAssembly = async fileName => {
  try {
    const response = await fetch(fileName);
    const buffer = await response.arrayBuffer();
    const module = await WebAssembly.compile(buffer);
    return Promise.resolve(new WebAssembly.Instance(module));
  } catch (error) {
    return Promise.reject(error);
  }
};

(async () => {
  try {
    const instance = await loadWebAssembly('squarer.wasm');
    squarer = instance.exports._Z7squareri;
    console.log('Compiled finished!');
  } catch (error) {
    console.log(error.message);
  }
})();
