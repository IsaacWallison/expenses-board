import selectAll from './select-all';

const disableButtons = (selector: string) => {
  selectAll<HTMLButtonElement>(selector).forEach(
    (button) => (button.disabled = true)
  );
};

export default disableButtons;
