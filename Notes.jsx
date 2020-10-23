import React from "react";
import { useState } from "react";

const Notes=(props)=>{

const [expand, setExpand] = useState(false);

const [note, setnote] = useState({
    title:"",
    content:"",
});

const inputEvent = (event) => {
    const{name, value} = event.target; 

    setnote((prev)=>{
        return{
           ...prev, 
           [name]: value,
        };
    });
    console.log(note);
};

const addEvent=(e)=>{
  e.preventDefault();
  props.passNote(note);
  setnote({
    title:"",
    content:"",
});
};

const expandIt=()=>{
    setExpand(true);
};

const backToNrml=()=>{
    setExpand(false);
};

return(
<>
   <div className="main"  onDoubleClick={backToNrml}> 
       <form>
       {expand?
           <input 
           type="text"
           name="title"
           value={note.title} 
           onChange={inputEvent} 
           placeholder="Title" 
           autoComplete="off"
           /> : null}

           <textarea 
           rows="" 
           column="" 
           name="content" 
           type="text" 
           value={note.content} 
           onChange={inputEvent} 
           placeholder="Write a note." 
           onClick={expandIt} 
           />
           
         {  expand ?
           <button className="btn" onClick={addEvent}>+</button> : null}
       </form>
   </div>
</>

   );
};

export default Notes ;
