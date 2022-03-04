import { useState, useEffect } from 'react';

import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [ jobs, setJobs ] = useState([]);

  // useEffect(() => {
    //   console.log(jobs.company)
    // }, [jobs]);
    
    const fetchJobs = async () => {
      const res = await fetch(url);
      const newJobs = await res.json();
      console.log(newJobs);
      setJobs(newJobs);
    }

    useEffect(() => {
      fetchJobs();
    }, []);
  
  return (
    <div className="App">
    </div>
  )
}

export default App
