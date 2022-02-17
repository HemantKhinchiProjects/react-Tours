import React from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './style.css';
const url = 'https://course-api.com/react-tours-project';
export default function App() {
  return (
    <div>
      <Loading />
      <h2>Tours Project Setup</h2>
    </div>
  );
}
