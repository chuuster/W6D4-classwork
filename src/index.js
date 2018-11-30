const DOMNodeCollection = require("./dom_node_collection.js");

function $l(selector) {
  if (typeof(selector) === "string") {
    console.log(document.querySelectorAll(selector));
    let result = Array.from(document.querySelectorAll(selector));
    console.log(result);
    let matches = new DOMNodeCollection(result);
    console.log(matches);
    return matches;
  } else if (selector instanceof HTMLElement) {
    let result = [selector];
    let matches = new DOMNodeCollection(result);
    return matches;
  }
}

window.$l = $l;

let title = $l('title');
let body = $l('body');

// console.log(title);
