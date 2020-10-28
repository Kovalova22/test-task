import React from 'react';
import './App.css';
import {Container} from './ModalAdd/AddContainer';


import ListHotdogs from './ModalAdd/ListHotdogs';



const App = () => {
  const ModalAdd = 'Open Form';
  const onSubmit = (event) => {
    event.preventDefault(event);
};   
  return (
    <div className="App">
      <header className="App-header">
       <div className="header-left"><img className="img-header" src="https://hiphiphooray.com.sg/wp-content/uploads/2017/10/Hip_Hip_Hooray_Hotdog.jpg" 
       alt="hotdog"/>
        <h1>Crud</h1> </div>
        <Container ModalAdd={ModalAdd} onSubmit={onSubmit} />
         
      </header>
      <div>
        <h2 className="h2Main">All hot-dogs</h2>
        <hr/>
      </div>
      <div className="articles">
      <ListHotdogs /> 
      </div>
      </div>
  );

  };
export default App;