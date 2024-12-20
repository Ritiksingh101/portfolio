import { HashRouter,Route,Routes } from 'react-router';
import Home from './Home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </HashRouter>
 
  );
}

export default App;
