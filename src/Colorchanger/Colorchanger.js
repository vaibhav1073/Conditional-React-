import './Colorchanger.css'
import{useState} from "react"


const Colorchanger=()=>{
    const [color,setColor]=useState("");
    console.log(color);
    
    return (
        <div className="container" >
            <div className="box" style={{backgroundColor:color}} ></div>
            <input className="" type="text" 
            placeholder="enter color"
            value={color}
            onChange={(e)=>setColor(e.target.value)} 
            ></input>
            <button type="button"
            onClick={(e)=>{setColor("");   }}
            >reset</button>
        </div>
    )
}
export default Colorchanger;