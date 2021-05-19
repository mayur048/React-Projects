import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick'; 
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';

function App() {
  return (
    <div className="App">
      <NameList />
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />*/}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Mayur" roll="1">
        <p>This is the child Props</p>
      </Greet>
      <Greet name="Elena" roll="2">
        <button>Action</button>
      </Greet>
      <Greet name="Corona" roll="3"/>
      <Welcome name="Mayur" roll="1"/>
      <Welcome name="Elena" roll="2"/>
      <Welcome name="Corona" roll="3"/> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
