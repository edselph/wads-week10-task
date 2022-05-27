import React, { useState } from "react";

const CreatePost = () => {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === 'name'){
        setName(value);
    }
    if(id === 'alias'){
        setAlias(value);
    }
  }
  
  const handleSubmit  = () => {
    console.log(name, alias);
    var heroes = {
    "name": name, 
    "alias": alias
    } 
  
    console.log(e);
    const response = fetch('http://127.0.0.1:8000/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hero)
    })
  }

 return (
   <><form />
   <label>
     Name:
     <br />
     <input type="text" id="name" onChange={(e) => handleInputChange(e)} />
   </label>
   <br />
   <br />
   <label>
       Alias:
       <br />
       <input type="text" id="alias" onChange={(e) => handleInputChange(e)} />
     </label><br /><br /><button onClick={() => handleSubmit()} type='submit'>Submit</button></>
  );
}


export default CreatePost;
