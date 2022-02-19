import './App.css';

import { Motus } from 'Pages/index';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="w-full text-white flex flex-col items-center p-6 divide-y-2 divide-cyan-200">
      <h1 className="text-3xl md:text-5xl tracking-wider text-cyan-500 font-medium mb-8">
        Haxer Games
      </h1>
      <div className="pt-8 w-full">
        <Routes>
          <Route path="/motus" element={<Motus />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
