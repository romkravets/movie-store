
import Row from './components/Row/Row';
import requests from './requests';
import './App.css';

function App() {
  return (
    <div className="App">
     App
     <Row title="ORIGINAl" fetchUrl={requests.fetchNetdlixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrenfing}/>
    </div>
  );
}

export default App;
