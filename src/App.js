import React, { useCallback, useState } from 'react';
import Counter from '/./Counter';

function App() {
  const [todos, setTodos]=useState([
    {
      id:1,
      text:'운동하기',
      checked:true.valueOf,
    },
    {
      id:2,
      text:'요리하기',
      checked:true,
    },
    {
      id:3,
      text:'학원가기',
      checked:false,
    }
  ]);

  const onInsert = useCallback(value=>{

  },[]);
  const nextId = useRef(4);//ref를 사용해서 변수 담기
  const onInsert = useCallback(value=>{
    const todo={
      id:nextId.current,
      text:value,
      checked:false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos]);

  const onRemove = useCallback(id=>{
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);

  const onToggle = useCallback(id=>{
setTodos(todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked}:todo));
  },[todos]);
  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove}/>
      </TodoTemplate>
  );
}

export default App;
