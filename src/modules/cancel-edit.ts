import enableButtons from '../libs/enable-buttons';
import select from '../libs/select';
import toggleVisible from '../libs/toggle-visible';
import state from '../state';

const cancelEdit = () => {
  state.isEditing = false;
  state.expenseToBeEditedId = 0;

  toggleVisible('#create-expense');
  toggleVisible('#cancel-edit');
  toggleVisible('#confirm-edit');
  enableButtons("button[data-event='edit']");
  enableButtons("button[data-event='delete']");
  select<HTMLInputElement>('#form-description')!.value = '';
  select<HTMLInputElement>('#form-expenditure')!.value = '';
};

export default cancelEdit;
