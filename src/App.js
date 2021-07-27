import React from 'react';
import Tasks from './components/tasks/Tasks';
import './App.css';
import News from './components/collapsible/new';
import {useState} from 'react';

function App() {

  let [isOpen, setIsOpen]=useState(false)
  return (
    <div>
      <Tasks />
{!isOpen? <button onClick={()=>setIsOpen(!isOpen)}>Click me to show the news contents</button>:null}

      <News isOpen={isOpen}>
        <h1>hello word</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quaerat facilis excepturi quia eos veritatis nostrum expedita? Vitae ducimus soluta laboriosam blanditiis inventore doloribus! Distinctio nostrum molestias aspernatur deleniti? Ut, cupiditate sit ullam aliquid adipisci quaerat architecto earum eum illum quae perferendis possimus laborum, hic officia delectus minima id sequi?</p>
        <button onClick={()=>setIsOpen(!isOpen)}>save</button> <br />
        <button onClick={()=>setIsOpen(!isOpen)}>cancle</button>
      </News>
    </div>
  );
}

export default App;
