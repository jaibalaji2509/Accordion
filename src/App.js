import React from 'react';
import Accordion from './Accordion';
import {accordionData} from "./utils/content"

const App = () => {    
  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion tile={title} content={content} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;
