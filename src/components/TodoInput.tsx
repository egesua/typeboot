interface TodoInputProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const TodoInput:React.FC<TodoInputProps> = ({todo, setTodo}) => {
  return (
    <form onSubmit={() => {}}>
      <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="Insert Todo here." />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput;
