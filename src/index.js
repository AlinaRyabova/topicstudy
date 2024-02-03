import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<React.StrictMode></React.StrictMode>);
// const div = document.createElement(`div`);
// div.id = `qwerty`
// div.attr = 'qwerty'

// const root = document.getElementsById(`root`
// root.append(div))
// const text = React.createElement(
//   `p`,
//   {
//     id: `123`,
//   },
//   `Hello React`
// );

// const text = <p id="123">Hello React</p>;

// const div = (
//   <div id="qwerty" className="qwerty">
//     {text}
//   </div>
// );

// const div = React.createElement(
//   `div`,
//   {
//     id: 'qwerty',
//     className: `qwerty`,
//   },
//   text
// );
// console.log(`div`, div);

const root = document.getElementById(`root`);
ReactDOM.createRoot(root).render(<App />);
// root.append(div)
