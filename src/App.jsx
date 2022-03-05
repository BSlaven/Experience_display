import { useState, useEffect } from 'react';

import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [ jobs, setJobs ] = useState([]);
  const [ companies, setCompanies ] = useState([]);

    const fetchJobs = async () => {
      const res = await fetch(url);
      const newJobs = await res.json();
      console.log(newJobs);
      setJobs(newJobs);
      setCompanies(newJobs.map(item => item.company));
    }

    useEffect(() => {
      console.log(jobs);
    }, [jobs])

    useEffect(() => {
      console.log(companies);
    }, [companies])

    useEffect(() => {
      fetchJobs();
    }, []);

    const selectCompany = company => {
      console.log(company);
    }
  
  return (
    <div className="App">
      <h2 className='title'>Experience</h2>
      <section className='main-section'>
        <aside className='sidebar'>
          {companies && companies.map(company => <h5 onClick={() => selectCompany(company)}>{company}</h5> )}
        </aside>
        <main></main>
      </section>
    </div>
  )
}

export default App
