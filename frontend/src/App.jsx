import './App.scss';
import Sidebar from './components/Sidebars/Sidebars';
import Completed from './pages/Completed';
import Home from './pages/Home';
import Important from './pages/Important';
import Now from './pages/Now';
import './scss/common.scss'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Sidebar></Sidebar>

      <main className='w-10/12'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/important" element={<Important />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
