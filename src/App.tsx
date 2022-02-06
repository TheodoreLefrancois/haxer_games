import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Sutom } from './pages';
function App() {
  return (
    <>
      <h1>Welcome to Haxer Games</h1>
      <Routes>
        <Route path="/sutom" element={<Sutom />} />
      </Routes>
    </>
  );
}

export default App;
