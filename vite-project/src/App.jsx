import React from 'react';
import './App.css'; // If you have a CSS file for App
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className="app"> {/* Use a div to apply flexbox */}
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
