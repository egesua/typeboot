import { ITypes } from "../types/iTypes";

interface TodoResultProps {
    todos: ITypes[]
    setTodos: React.Dispatch<React.SetStateAction<ITypes[]>>
}

const TodoResult: React.FC<TodoResultProps> = ({todos, setTodos}) => {
  return (
    <div>
    {
        todos && todos.map((todo, i) => (
            <div key={i}>
                <div>
                   {todo.todo} 
                </div>
                <div>
                    <span>
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
