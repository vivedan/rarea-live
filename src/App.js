import './App.css';
import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/Canvas';
import Footer from './components/Footer';
import About from './components/About';
import List from './components/List';
import Input from './components/Input';
import Welcome from './components/Welcome';

import firebase from './firebase';

function App() {

  const [slide, setSlide] = useState("Welcome");

  useEffect(() =>{
    //console.log(slide);
  }, [slide]);

  const [comments, setComments] = useState([]);

  const [language, setLanguage] = useState();

  useEffect(() => {
      const projectsRef = firebase.database().ref('tree-comments');
      projectsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          Object.values(items).forEach(item => newState.push(item));
          setComments(newState);
      })
      checkLanguage();
  }, []);

  function checkLanguage(){
    var lang = window.navigator.userLanguage || window.navigator.language;
    setLanguage(lang.substring(0, 2));
    //console.log(language); //works IE/SAFARI/CHROME/FF
  }

  /* useEffect(() =>{
    console.log(comments);
  }, [comments]); */

  return (
    <div className="App">
      <ThreeCanvas comments={comments}/>
      <Footer setSlide={setSlide} language={language}/>
      {slide === "About" && <About setSlide={setSlide} language={language}/>}
      {slide === "List" && <List comments={comments} setSlide={setSlide} language={language}/>}
      {slide === "Input" && <Input setSlide={setSlide} language={language}/>}
      {slide === "Welcome" && <Welcome setSlide={setSlide} language={language}/>}
    </div>
  );
}

export default App;
