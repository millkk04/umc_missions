// App.js
import React, { useState } from 'react';
import './App.css';
import Button from './Button_c';
import Input from './Input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'To Do 만들어보기' },
    { id: 2, task: '준현 재현 주원 현우 성민' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <Button className='upload_todo' onClick={addTodo} label="할 일 등록" />
      </form>
      <div>
        {todos.map((todo) => (
          <div style={{ display: 'flex', gap: '20px' }} key={todo.id}>
            {editingId !== todo.id && (
              <div style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div style={{ display: 'flex', gap: '20px' }}>
                <p>{todo.id}.</p>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <Button className='Del' onClick={() => deleteTodo(todo.id)} label="삭제하기" />
            {editingId === todo.id ? (
              <Button className='fix_end' onClick={() => updateTodo(editingId, editText)} label="수정 완료" />
            ) : (
              <Button className='fixing' onClick={() => setEditingId(todo.id)} label="수정 진행" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
