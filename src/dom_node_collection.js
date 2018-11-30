class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(string) {
    if (string != undefined) {
      // let inner = document.createElement(string);
      this.elements.forEach(el => el.innerHTML = string);
    } else {
      return this.elements[0].innerHTML;
    }
  }
}

module.exports = DOMNodeCollection;
