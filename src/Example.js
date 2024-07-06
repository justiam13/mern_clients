import { Mycontext } from "./Mycontext";
import Mycomponent from "./Mycomponent";
import { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Register from "./components/Register";
//provider->produces the dataa/props


export default function Example() {
    //provider
    const [text,setText] =useState("")
  return (
    <div>
      <Mycontext.Provider value={{text,setText}}>
      <Mycomponent/>
      </Mycontext.Provider>
    </div>
  )
}
