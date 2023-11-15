// App.js
/*
import React from 'react';
import MenuItem from './MenuItem';
import './App.css';

const App = () => {
  const menuItems = [
    { label: 'Item 1', subMenuItems: ['Subitem 1.1', 'Subitem 1.2', 'Subitem 1.3'] },
    { label: 'Item 2', subMenuItems: ['Subitem 2.1', 'Subitem 2.2'] },
    { label: 'Item 3', subMenuItems: ['Subitem 3.1', 'Subitem 3.2', 'Subitem 3.3'] },
  ];

  return (
    <div className="app-container">
      <h1 className="header">Trabajo Acordeón en React</h1>
      <div className="center-content retro-content">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} subMenuItems={item.subMenuItems} />
        ))}
      </div>
    </div>
  );
};

export default App;- */

// App.js
 
import React from 'react';
import MenuItem from './MenuItem';
import './App.css';

const App = () => {
  const menuItems = [
    { label: 'Integrantes', subMenuItems: ['Medrán Thelma', 'Natale Valentina', 'Rossello Nicolas', 'Marquez Ramiro', 'KKrieger Lucas'] },
    { label: 'Item 2', subMenuItems: ['Subitem 2.1', 'Subitem 2.2'] },
    { label: 'Item 3', subMenuItems: ['Subitem 3.1', 'Subitem 3.2', 'Subitem 3.3'] },
  ];
  
  return (
    <div className="app-container">
      <div className="header">
        <h1 className="header-text">Trabajo acordeón en React</h1>
      </div>
      <div className="menu-item">
        {menuItems.map((item, index) => (
          <MenuItem key={index} label={item.label} subMenuItems={item.subMenuItems} />
        ))}
      </div>
    </div>
  );
};

export default App;
 