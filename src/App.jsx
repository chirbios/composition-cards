import React from 'react';
import Card from './Main';
import './index.css';

export default function App() {
  const titles = ['Card title', 'Special title treatment'];
  const messages = [
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    'With supporting text below as a natural lead-in to additional content.',
  ];

  const button = 'Go somewhere';

  return (
    <div>
      <Card title={titles[0]} message={messages[0]} button={button} />
      <Card
        hideimage={'hideimage'}
        title={titles[1]}
        message={messages[1]}
        button={button}
      />
    </div>
  );
}