import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieSearch from './pages/MovieSearch';

function App() {
const apikey = '48897788';
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MovieSearch apikey={apikey} /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
