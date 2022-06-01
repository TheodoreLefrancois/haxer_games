import './App.css';

import Header from 'Layout/Headers';
import { Motus, Shifumi } from 'Pages/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="relative">
      <Header />
      <div className="w-full text-white flex flex-col items-center p-6 divide-y-2 divide-cyan-200">
        <h1 className="text-3xl md:text-5xl tracking-wider text-cyan-500 font-medium mb-8">
          Haxer Games
        </h1>
        <div className="pt-8 w-full">
          <Routes>
            <Route path="/motus" element={<Motus />} />
            <Route path="/shifumi" element={<Shifumi />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
