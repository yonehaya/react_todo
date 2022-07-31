import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  const style = {
    backgroundColor:'rgba(0, 255, 255, 0.466)',
    width: '400px',
    height: '30px',
    padding: '8px',
    margin: '8px',
    borderRadius: '8px'
};
return (
  <div style={style} className="input-area">
    <input
      disabled={disabled}
      placeholder="TODOを入力"
      value={todoText}
      onChange={onChange}
    />
    <button disabled={disabled} onClick={onClick}>追加</button>
  </div>
);
};