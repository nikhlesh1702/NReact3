import React from "react";
import ReactDOM  from "react-dom/client";
import { styles } from "./styles.css"; 

/*const element = React.createElement("div", {class: "Heading"},
 [React.createElement("h1", {id: "title"}, "Hello World"), 
  React.createElement("h2", {id: "title"}, "Hello World2"),
  React.createElement("h3", {class: "title2"},"Hello World3") ,
]);
*/ 
//Using React.createElement

/*const element = (
    (
        <div className="title">
            <h1>Hello World</h1>
            <h2>Helow World2</h2>
            <h3>Hellow World3</h3>
        </div>

    )
);*/

//Using JSX


const Element = ()=>
{
    return(
        <>
        <div className="title">
            <h1>Hello World</h1>
            <h2>Hello World2</h2>
            <h3>Hello World3</h3>
            
        </div>
        <Robot/>
        </>

    );
}

const Robot = () =>{
    return(
        <h1> I am Chitti, the robot</h1>

    );
}
//Using React Component

const root = ReactDOM.createRoot((document.getElementById("root")));

root.render(<Element/>);

//react.creatElement creates an object and once it is being rendered, then it becomes a HTML element