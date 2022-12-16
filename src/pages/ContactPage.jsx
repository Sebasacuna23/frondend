import React, { useEffect, useState } from "react";


function ContactPage () {

    const [count,SetCount] = useState(0);
useEffect( () =>{

    document.title = `You clicked ${count} times`;
});

    return(
        <div>
            <h1>Página de contacto </h1>
            <p>Bienvenidos a su papeleria</p>
            <p>You clicked {count} times</p>
            <button onClick={()=> SetCount(count +1)}>
                Click me
            </button>
        </div>
      
    );
    
}export{ContactPage}