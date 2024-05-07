import './App.css';
import ToDo from './components/ToDo';
import f3 from "./img/f3.png";
import f4 from "./img/f4.png";
import f5 from "./img/f5.png"

function App() {
  return (
    <div className="main">
      <h2 className="main__title">Что вам необходимо?</h2>
      <div className="wrapper">
        <ToDo title="Первый блок" img={f3} text="1" />
        <ToDo title="Второй блок" img={f4} text="2" />
        <ToDo title="Третий блок" img={f5} text="3" />
      </div>
    </div>
  );
}

export default App;