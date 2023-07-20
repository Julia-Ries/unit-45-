import React, {useState, useEffect} from 'react';
import JoblyApi from '../api';
import SearchForm from '../common/SearchForm';
import LoadingSpinner from '../common/LoadingSpinner';
import JobCardList from './JobCard';


function JobList(){
    console.debug("JobList")

    const [jobs, setJobs] = useState(null);

    useEffect(function getJobsOnMount(){
        console.debug("JobList useEffect getJobsOnMount")
        search();
        
    }, []);

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if(!jobs) return <LoadingSpinner />

    return (
        <div className='JobList'>
            JobCardList
            <SearchForm  search = {search}/>
            {jobs.length 
            ? <JobCardList jobs={jobs} />
            : <p>Sorry, no results were found.</p> 
            }
        </div>
    );
}

export default JobList;