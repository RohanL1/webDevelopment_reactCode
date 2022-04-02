import React from "react";


function ToDoItem(props) {
    return (
        <div onClick={() => props.onChecked(props.id)} >
            <li>
                {props.text}
            </li>
        </div>
    );
}

export default ToDoItem;



// function ToDoItem(props) {
//     const [isCrossed, changeIsCoressed] = useState(false);


//     return (
//         <div onClick={() => changeIsCoressed( prev => !prev)} >
//             <li style={{textDecoration : isCrossed ? "line-through" : "none"}} >
//                 {props.text}
//             </li>
//         </div>
//     );
// }
