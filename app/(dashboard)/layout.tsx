import NewTodoForm from "@/components/NewTodoForm"

const DashbordLayout = ({ children }) => {
    return <div>
        <h1> DashBored</h1>
         
         <div>
            <NewTodoForm />
        </div>
        
        <div>
            {children}
        </div>
       
    </div>
}


export default DashbordLayout