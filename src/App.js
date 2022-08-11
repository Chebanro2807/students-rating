import MainPage from './components/mainPage'
import './style.css'
import Top from "./components/top";
import AddScoore from "./components/addScoore";
import {data} from "./components/data";
import { useState } from "react";

function App() {
    let [list, setList] = useState(data)
    list.sort((lover, higher) => {
        if(lover.points < higher.points) {
            return 1;
        }
        if(lover.points > higher.points) {
            return -1;
        }
        return 0
    })

  return (
      <div className='mainPage'>
        <Top/>
        <MainPage data = {list}/>
        <AddScoore data = {list} getList={(elem) => {setList(elem)}}/>
      </div>
  );
}

export default App;
