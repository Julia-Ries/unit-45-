import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import JoblyApi from '../api';
import LoadingSpinner from '../common/LoadingSpinner';
import JobCardList from '../jobs/JobCardList';





function CompanyDetail(){
    const {handle} = useParams();

    const[company, setCompany]= useState(null);

    useEffect(function getCompanyAndJobsForUser(){
        async function getCompany(){
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if (!company) return <LoadingSpinner />;

    return (
        <div className='CompanyDetail'>
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <JobCardList/>
        </div>
    )
};

export default CompanyDetail;