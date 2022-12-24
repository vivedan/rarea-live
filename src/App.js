import './App.css';
import React, { useState, useEffect } from 'react';
import ThreeCanvas from './components/Canvas';
import Footer from './components/Footer';
import About from './components/About';
import List from './components/List';
import Input from './components/Input';
import Welcome from './components/Welcome';
import Users from './components/Users';

import { Router, Route, Link, useLocation } from "wouter";

import firebase from './firebase';

function App() {

  const [slide, setSlide] = useState("Welcome");

  const [location, setLocation] = useLocation();

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
  }, [comments]);*/

  return (
    <div className="App">
      {/* <Route path="/team/:username">{(params) => <Users user={params.username} />}</Route> */}
      <Route path="/">
        {/* <ThreeCanvas comments={comments}/>
        <Footer setSlide={setSlide} language={language}/>
        {slide === "About" && <About setSlide={setSlide} language={language}/>}
        {slide === "List" && <List comments={comments} setSlide={setSlide} language={language}/>}
        {slide === "Input" && <Input setSlide={setSlide} language={language}/>}
        {slide === "Welcome" && <Welcome setSlide={setSlide} language={language}/>} */}
      </Route>
      <Route path="/tree">
        {/* <ThreeCanvas comments={comments}/>
        <Footer setSlide={setSlide} language={language}/>
        {slide === "About" && <About setSlide={setSlide} language={language}/>}
        {slide === "List" && <List comments={comments} setSlide={setSlide} language={language}/>}
        {slide === "Input" && <Input setSlide={setSlide} language={language}/>}
        {slide === "Welcome" && <Welcome setSlide={setSlide} language={language}/>} */}
      </Route>
      
    </div>
  );
}

export default App;
