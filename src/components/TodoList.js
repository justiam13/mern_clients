/*import React, { useState } from 'react'


export default function TodoList() {
    const [FormData,setFormData]= useState({
        time:" ",
        note: " "
    })
    const [TableData,SubmitTable]= useState([])
    function HandleForm (e) {
        const {name,value}=e.target
        SubmitFormData({...FormData,[name]:value})
    }
    function HandleSubmit (){
        submitTable([...TableData,FormData]);
        SubmitFormData({
            time:"",
            note:""
        })
    }
  return (
    <div class= "form">
        <form>
            <input
            type='Time'
            value={FormData.Time}/>
            onChange={formData.time}
            <input
            type='text'
            value={FormData.Note}/>
            onChange={FormData.note}

        </form>
        <table>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Note</th>

                </tr>
            </thead>
        </table>
      
    </div>
  )
}*/

