import './Todoinput.css'
import{useState} from "react"


const Todoinput=()=>{
    const [todo,setTodo]=useState("");
    console.log(todo);
    
    return (
        <div className="container" style={{backgroundColor:todo}}>
            <input className="" type="text" 
            placeholder="enter todo"
            value={todo}
            onChange={(e)=>setTodo(e.target.value)} 
            ></input>
            <button type="submit"  >submit</button>
        </div>
    )
}
export default Todoinput;