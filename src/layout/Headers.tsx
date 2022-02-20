import React from 'react';
import { useNavigate } from 'react-router-dom';

import NavigationButton from './NavigationButton';

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };
  return (
    <>
      <div className="absolute top-1 flex flex-col items-center">
        <button onClick={() => setIsOpen(!isOpen)} onKeyDown={() => setIsOpen(!isOpen)}>
          <img src="/assets/menu_logo.png" className="h-20 md:h-24" alt="menu_logo" />
        </button>
      </div>
      {isOpen && (
        <div
          className={`absolute tracking-wider rounded-md font-bold text-cyan-500 py-2 px-4 text-xl w-72 mt-[0.4rem] flex flex-col items-center bg-slate-500 top-[88px] md:top-[100px] divide-y-4 transition transform ease-in duration-200 -left-72 translate-x-72 ${
            isOpen && ''
          }`}>
          <h2 className="mb-5">Choose a game</h2>
          <nav className="flex flex-col items-start py-2 pl-4 w-full divide-y-2 divide-dashed">
            <NavigationButton onClick={() => onNavigate('/')} label="GO BACK HOME" />
            <NavigationButton onClick={() => onNavigate('/motus')} label="MOTUS" />
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
