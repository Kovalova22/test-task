import React, {Fragment, useState} from 'react';

const EditHotdog = ({ hotdog }) => {

    const [hotdogs, setHotdogs] = useState([]);

    const [name, setName] = useState(hotdog.name);
    const [title, setTitle] = useState(hotdog.title);
    const [description, setDescripton] = useState(hotdog.description);
    const [image, setImage] = useState(hotdog.image);

    //edit fucntion

    const updateValues = async(e) => {
        e.preventDefault();
        try {
            const body = {name, title, description, image};
            const response = await fetch(`http://localhost3000/hotdogs/${hotdog.hotdog_id}`, 
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                
                body: JSON.stringify(body)
            }
            );
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    //delete Hotdog
const deleteHotdog = async id => {
    try {
        const deleteHotdog = await fetch(`http://localhost:3000/hotdogs/${id}`,{
            method: "DELETE"
        });

        setHotdogs(hotdogs.filter(hotdog => hotdog.hotdog_id !==id));
        console.log(deleteHotdog);
        window.location = "/";
    } catch (err) {
        console.error(err.message);
        
    }
}


    return (
        <Fragment>
                        
        <button type="button" className="article-modal-button-item" data-toggle="modal" data-target={`#id${hotdog.hotdog_id}`}>
        Edit
        </button>

        
        <div className="modal" id={`id${hotdog.hotdog_id}`}>
        <div className="modal-dialog">
            <div className="modal-content">
            
          

            <div className="modal-body">
                <input type='text' className='form-control' value={name} onChange={e => setName(e.target.value)}/>
                <input type='text' className='form-control' value={title} onChange={e => setTitle(e.target.value)}/>
                <input type='text' className='form-control' value={description} onChange={e => setDescripton(e.target.value)}/>
                <input type="text" className='form-control' value={image} onChange={e => setImage(e.target.value)}/>
            </div>

           
            <div className="modal-footer">
                <button type="button" className="article-modal-button-item" data-dismiss="modal"
                onClick= {e => updateValues(e)}>Upgrade</button>
                <button className="article-modal-button-item" onClick={() => deleteHotdog(hotdog.hotdog_id)}>Delete</button>
            </div>

            </div>
        </div>
        </div>
        </Fragment>
    )
}

export default EditHotdog;