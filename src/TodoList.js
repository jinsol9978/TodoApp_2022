import TodoListItem from './TodoListItem'
import '../styles/TodoList.css'

function TodoList({todos,onRemove}){
    //console.log(props);
    //const {todos} = props;
    return(
        <div className='TodoList'>
            {todos.map((todo)=>(
                <TodoListItem
                todo={todo}
                key={todo.id}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            ))}
        </div>
    )

}