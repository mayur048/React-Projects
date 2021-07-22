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
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './component/Form'
import LifeCycleA from './component/LifeCycleA';
import FragmentDemo from './component/FragmentDemo';
import Table from './component/Table';

function App() {
  return (
    <div className="App">
      <Table />
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}

      {/* <Form /> */}

      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
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
