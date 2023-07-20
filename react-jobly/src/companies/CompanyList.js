import React, {useEffect, useState} from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import SearchForm from '../common/SearchForm';
import JoblyApi from "../api";
import CompanyCard from './CompanyCard';


function CompanyList(){
    console.debug("CompanyList Component")

    const [companies, setCompanies]= useState(null);

    useEffect(function getCompaniesOnMount(){
        console.debug("CompanyList useEffect function getCompaniesOnMount");
        search();
    }, []);

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;


    return(
        <div className='CompanyList'>
            <SearchForm search = {search}/>
            {companies.length 
            ? (
                <div className='CompanyList-list'> 
                    {companies.map (c => (
                        <CompanyCard 
                            key = {c.handle}
                            handle= {c.handle}
                            name= {c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}/>
                    ))}
                </div>
            ) : (
                <p>Sorry, no results were found.</p>
            )}
        </div>
    );
}


export default CompanyList;
