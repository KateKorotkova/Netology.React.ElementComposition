import './App.css';
import { FirstCard, SecondCard } from "./firstTask/cards";
import { Yandex } from './secondTask/yandex';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let isFirstTask = true;
  return (<> {isFirstTask ? <><FirstCard/><SecondCard/></> : <Yandex/>} </>);
}

export default App;
