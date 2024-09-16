import { useState } from 'react'
import './style.css'
import { InputTodo } from './components/InputTodo';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeText = e => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (!todoText) return;
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  }
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }
  const onClickComp = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newcompleteTodos);
  }
  const onClickrev = (index) => {
    const newincompleteTodos = [...incompleteTodos, completeTodos[index]];
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(index, 1);

    setCompleteTodos(newcompleteTodos);
    setIncompleteTodos(newincompleteTodos);
  }
  const isMaxLimitTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={isMaxLimitTodos}
      />
      
      {isMaxLimitTodos && (
        <p style={{ color: "red" }}>登録できるタスクは５つまでです。</p>
      )}
      <IncompleteTodo
        todos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo
        todos={completeTodos}
        onClickrev={onClickrev}
      />
    </>
  )
}

