import React, { useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import './style.css';
const url = 'https://course-api.com/react-tours-project';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
}
