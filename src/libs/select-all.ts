function selectAll<T extends HTMLElement>(selector: string) {
  return document.querySelectorAll<T>(selector);
}

export default selectAll;
