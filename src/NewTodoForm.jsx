import { useState } from 'react';

export const NewTodoForm = ({ onSubmit }) => {
  const [item, setItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (item === '') return;
    onSubmit(item);
    setItem('');
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};
