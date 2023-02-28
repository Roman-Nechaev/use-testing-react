import React from 'react';

const TodoFolter = ({ value, onChange }) => (
  <label>
    Фольтр по имени
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default TodoFolter;
