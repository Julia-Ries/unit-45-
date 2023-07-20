import React from 'react';
import {Link} from 'react-router-dom';

function JobCard({id, title, equity, salary, companyName}){
    return (
        <div className='JobCard card'>
            <h6 className='card-title'>{title}</h6> 
            <p>{companyName}</p>
            {salary && <div> <small> Salary: {formatSalary(salary)}</small></div>}
            {equity !== undefined && <div><small> Equity: {equity}</small></div>}
            <button>
                apply
            </button>
        </div>
    )
}

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();
  
    for (let i = salaryStr.length - 1; i >= 0; i--) {
      digitsRev.push(salaryStr[i]);
      if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }
  
    return digitsRev.reverse().join("");
  }


export default JobCard;