import React from 'react';
import './assets/reset.css'
import './assets/common.css'
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import ClickToEdit from './component/ClickToEdit';

const App = () => {            
  return (
    <div>
      <Toggle/>
      <Modal/>
      <Tab/>
      <Tag />
      <ClickToEdit/>
    </div>
  );
};

export default App;