/*import React, { useState } from "react"


export default function App () {
    const [data,setData] = useState({
        
        username:"",
        age:"", 
        password:""
    })
    const {username,age,password} =data;
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e=> {
      e.preventDefault()
      console.log(data)
    }
    return(

        <div>
            <center>
                <form>
                    <input type="text" name="username"  value={username} onChange={changeHandler}   placeholder="username" /> <br />
                    <input type="text" name="age"  value={age} onChange={changeHandler} placeholder="age"/><br />
                    <input type="password" name="password" value={password}  onChange={changeHandler} placeholder="password"/><br />
                     <input type="submit" name="submit" onSubmit={submitHandler}/>
 
                </form>
            </center>
            
        </div>
    )
}*/