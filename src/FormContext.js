import { createContext, useState } from 'react';
import React from 'react';

export const FormContext= createContext;
export const FormProvider = ({childComp})=>{
    const [form, setForm] = useState({
        Name: "",
        Age: "",
        Username: "",
        Password: "",
    })
    const[localDB,setDB] = useState([])
    const handleSubmit = () => {
        setDB([...localDB, form]);
        setForm({
            Name: "",
            Age: "",
            Username: "",
            Password: "",
        })
    }
    return(
        <FormContext.Provider
        value={{form,setForm,localDB,setDB}}>
            {childComp}
        </FormContext.Provider>
    );
    

}