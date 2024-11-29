function select<T extends HTMLElement>(selector: string) {
  return document.querySelector<T>(selector);
}

export default select;
