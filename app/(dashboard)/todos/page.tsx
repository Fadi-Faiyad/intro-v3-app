import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
    await new Promise((resolve, reject) => setTimeout(() => reject(), 1000))
    const todos = await db.todo.findMany({})
    return todos
}


const TodoPage =  async () => {
    const todos = await getData()
 return <div> 
    <TodoList todos={todos} /> </div>
}
export default TodoPage