import { useState, useEffect } from 'react';

import './App.css';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  
  const [ jobs, setJobs ] = useState([]);
  const [ companies, setCompanies ] = useState([]);
  const [ currentCompany, setCurrentCompany ] = useState({});
  const [ duties, setDuties ] = useState([]);

    const fetchJobs = async () => {
      const res = await fetch(url);
      const newJobs = await res.json();
      setJobs(newJobs);
      setCompanies(newJobs.map(item => item.company));
      setCurrentCompany(newJobs[0]);
    }

    // useEffect(() => {
    //   console.log(jobs);
    // }, [jobs])

    // useEffect(() => {
    //   console.log(companies);
    // }, [companies])

    useEffect(() => {
      console.log(currentCompany);
      const myDuties = currentCompany.duties;
      setDuties(myDuties);
      console.log(myDuties);
    }, [currentCompany])

    useEffect(() => {
      fetchJobs();
    }, []);

    const selectCompany = company => {
      const myCompany = jobs.find(job => job.company === company);
      setCurrentCompany(myCompany);
    }
  
  return (
    <div className="App">
      <h2 className='title'>Experience</h2>
      <section className='main-section'>
        <aside className='sidebar'>
          {companies && companies.map(company => (
            <h5
              key={company}
              onClick={() => selectCompany(company)}>
              {company}
            </h5>
          ))}
        </aside>
        <main className='main'>
          {duties && duties.map(duty => (
            <p key={duty}>{duty}</p>
          ))}
        </main>
      </section>
    </div>
  )
}

export default App
