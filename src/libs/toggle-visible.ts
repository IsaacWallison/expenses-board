import select from './select';

const toggleVisible = (selector: string | HTMLElement) => {
  if (selector instanceof HTMLElement) {
    selector.classList.toggle('none');
    return;
  }
  select<HTMLElement>(selector)?.classList.toggle('none');
};

export default toggleVisible;
