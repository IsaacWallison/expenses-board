import selectAll from './select-all';

const enableButtons = (selector: string) => {
  selectAll<HTMLButtonElement>(selector).forEach(
    (button) => (button.disabled = false)
  );
};

export default enableButtons;
