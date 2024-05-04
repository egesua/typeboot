interface TodoInputProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    addFunction: (e: React.FormEvent) => void
}

const TodoInput:React.FC<TodoInputProps> = ({todo, setTodo, addFunction}) => {
  return (
    <form onSubmit={e => addFunction(e)}>
      <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder="Insert Todo here." />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput;
