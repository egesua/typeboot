import { ITypes } from "../types/iTypes";

interface TodoResultProps {
    todos: ITypes[]
    setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>
}

const TodoResult: React.FC<TodoResultProps> = ({todos, setTodos}) => {

    const deleteFunction = (id: number) => {
        setTodos(todos.filter(todo => todo.id != id))
    }

  return (
    <div>
    {
        todos && todos.map((todo, i) => (
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: "250px", height: "40px", margin: "20px", padding: "5px", backgroundColor: "red"}} key={i}>
                <div>
                   {todo.todo} 
                </div>
                <div style={{display: "flex", gap: "10px"}}>
                    <span onClick={() => deleteFunction(todo.id)}>
                        Delete
                    </span>
                    <span>
                        Colorize
                    </span>
                </div>
            </div>
        ))
    }
    </div>
  )
}

export default TodoResult;
