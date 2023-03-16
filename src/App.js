import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Searchbox from './Searchbox';
import SearchFeed from './SearchFeed';

function App() {

  const [search,  setSearch] = useState('')

  return (
    <div>
      <BrowserRouter>
      <Searchbox setSearch={setSearch} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search/:term' element={<SearchFeed />} />
        <Route exact path='/movie/:id' element={<MovieDetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
