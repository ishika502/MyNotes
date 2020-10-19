import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Box=(props)=>{

const delNote=()=>{
    props.delItem(props.id ) ;
}

return(
    <>
        <div className="note">
        <h1> {props.title} </h1>
        <br />
        <p> {props.content} </p>
        <button onClick={delNote}> <DeleteOutlineIcon className="del"/> </button>
        </div>
    </>
);
};

export default Box;