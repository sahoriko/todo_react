export const CompleteTodo = (props) => {
  const { todos, onClickrev} = props;
  return (
    <div className="complete-area">
    <p className="title">完了のTODO</p>
    <ul>
      {todos.map((todo, index) => (
        <li key={todo}>
          <div className="list-row">
            <p className="todo-item">{todo}</p>
            <button onClick={() => onClickrev(index)}>戻す</button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}