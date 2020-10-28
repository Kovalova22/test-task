import React, {Fragment, useEffect, useState} from 'react';
import './List.css';

import EditHotdogs from './EditHD';


const ListHotdogs = () => {
    const [hotdogs, setHotdogs] = useState([]);


// //delete Hotdog
// const deleteHotdog = async id => {
//     try {
//         const deleteHotdog = await fetch(`http://localhost:3000/hotdogs/${id}`,{
//             method: "DELETE"
//         });

//         setHotdogs(hotdogs.filter(hotdog => hotdog.hotdog_id !==id));
//         console.log(deleteHotdog);
//     } catch (err) {
//         console.error(err.message);
        
//     }
// }



//Add Hotdog
    const getHotdogs = async () => {
        try {
            
            const response = await fetch("http://localhost:3000/hotdogs");
            const jsonData = await response.json();
                setHotdogs(jsonData);

                console.log(jsonData);
        } catch (err) {
            console.error(err.message);
            
        }
};    
useEffect(() => {
    getHotdogs();
}, []);
    
    return (
    <Fragment>
        {" "}
      
{hotdogs.map(hotdog => (
    <ul key={hotdog.hotdog_id}>
        <li style={{margin:"10px"}}>{hotdog.name}</li>
        <li style={{margin:"10px"}}>{hotdog.title}</li>
        <li style={{margin:"10px"}}>{hotdog.description}</li>
        <li style={{margin:"10px"}}>{hotdog.image}</li>
        <li><EditHotdogs hotdog={hotdog}/></li>
        {/* <li><button className="article-modal-button-item" onClick={() => deleteHotdog(hotdog.hotdog_id)}>Delete</button></li> */}
        
    </ul>
))}    


    </Fragment>
    )};
             
    


export default ListHotdogs;