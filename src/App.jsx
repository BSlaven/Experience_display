import { useState, useEffect } from 'react';

import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [ jobs, setJobs ] = useState([]);
    
    const fetchJobs = async () => {
      const res = await fetch(url);
      const newJobs = await res.json();
      console.log(newJobs);
      setJobs(newJobs);
    }

    useEffect(() => {
      console.log(jobs);
    }, [jobs])

    useEffect(() => {
      fetchJobs();
    }, []);
  
  return (
    <div className="App">
      <h2 className='title'>Experience</h2>
    </div>
  )
}

export default App
