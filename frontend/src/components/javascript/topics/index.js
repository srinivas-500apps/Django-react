import React, { useState } from 'react';
import './index.css';
import javascriptTopics from '../../../data/topics';



const Topics = () => {
  const keysArray = Object.keys(javascriptTopics);
  const [selectedTopic, setSelectedTopic] = useState("tools");
  const [topics, setTopics] = useState(javascriptTopics[selectedTopic]);
  const displayTopics = (field) => {
    setTopics(javascriptTopics[field]);
    setSelectedTopic(field);
  };



  return (
    <div>
      <h1 >Concepts</h1>
      <ul className='scroll-container'>
        {keysArray.map((item) => (
          <li className='container' key={item}>
            <button onClick={() => displayTopics(item)}>{item}</button>
          </li>
        ))}
      </ul>

      {selectedTopic && (
        <ul className='scroll-container'>
          {topics.map((item) => (
            <li className='container' key={item}>
              <button >{item}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Topics;
