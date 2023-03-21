import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import App from './App';

function Main(props) {
  return (
    <>
      <div className="card">{props.children}</div>
    </>
  );
}

export default function Card(props) {
  return (
    <Main>
      <img
        src="https://mebel-go.ru/mebelgoer/9663brush-colorful-graphic-bright-3840x2400.jpg"
        className={`card-img-top ${props.hideimage}`}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.message}</p>
        <a href="#" className="btn btn-primary">
          {props.button}
        </a>
      </div>
    </Main>
  );
}

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(<App name="Composition - Cards" />);

root.render(<App name="Composition - Cards" />);
