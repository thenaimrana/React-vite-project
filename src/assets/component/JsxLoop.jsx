import React from 'react';

const JsxLoop = () => {
    const Country=["Bangladesh","India","Soudhi","Amerca"]
    let listUl ={
        display:"flex",
    }
    let listLi ={
        color:"green",  
        listStyle:"none",
        fontSize:"20px",
        margin:"0 20px"

    }
    return (
        <div>
<h1 style={{textAlign:"center"}}>Jsx map Loop use</h1>
<ul style={listUl}>
    {
        Country.map((item,i)=>{
            return (<li key={i.toString} style={listLi}>{item}</li>)
        })
    }
</ul>
            
        </div>
    );
};

export default JsxLoop;