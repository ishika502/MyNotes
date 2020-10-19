import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import Box from "./Box" ;

const App=()=>{
    const [addItem, setAddItem]= useState([]);
const addNote=(note)=>{
   setAddItem((prev)=>{
             return [...prev, note];
   });

   console.log(note);
};

const onDelete = (id) => {
    setAddItem((oldData) =>  oldData.fliter((currData, index)=>{
         return index !== id ;
    })
    );
};

return (
<>
    <Header />
    
    <Notes passNote={addNote} />

   { addItem.map((val, index) => {
        return (<Box 
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        delItem = {onDelete}
         />
        );
    })}

    <Footer />
</>
   );
};

export default App ;