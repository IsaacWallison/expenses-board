const createBoard = () => {
  return `
    <thead>
        <caption id='expenses'>Expenses Board</caption>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
    </thead>
    <tbody id='expense-items'></tbody>
    `;
};

export default createBoard;
