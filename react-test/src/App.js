import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Name1 from "./Name1";

function App() {
  const [name, setName] = useState("Naver");
  const onClick = ()=>{
    setName((name)=>{
      if(name === "Naver"){
        return "Daum"
      } else {
        return "Naver"
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Name1 name={name}></Name1>
        <a className="App-link" href="http://naver.com">{name}</a>
        <button onClick={onClick}>이름변경</button>
      </header>
    </div>
  );
}

export default App;
