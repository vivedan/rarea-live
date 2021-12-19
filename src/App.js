import './App.css';
import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/Canvas';
import Footer from './components/Footer';
import About from './components/About';
import List from './components/List';
import Input from './components/Input';

import firebase from './firebase';

function App() {

  const [slide, setSlide] = useState("");

  useEffect(() =>{
    //console.log(slide);
  }, [slide]);

  const [comments, setComments] = useState([]);

  useEffect(() => {
      const projectsRef = firebase.database().ref('tree-comments');
      projectsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          Object.values(items).forEach(item => newState.push(item));
          setComments(newState);
      })
  }, []);

  /* useEffect(() =>{
    console.log(comments);
  }, [comments]); */

  return (
    <div className="App">
      <ThreeCanvas comments={comments}/>
      <Footer setSlide={setSlide}/>
      {slide == "About" && <About setSlide={setSlide}/>}
      {slide == "List" && <List comments={comments} setSlide={setSlide}/>}
      {slide == "Input" && <Input setSlide={setSlide}/>}
    </div>
  );
}

export default App;
