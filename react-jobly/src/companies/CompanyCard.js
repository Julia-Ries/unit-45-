import React from 'react';
import {Link} from 'react-router-dom';



function CompanyCard({handle, name, description, logoUrl}){
    console.debug('companyCard');

    return (
        <Link className= 'CompanyCard' to= {`/companies/${handle}`}>
        <div className='CompanyCard' >
            <h4>
                {name}
                {logoUrl && <img scr={logoUrl} alt={name}/>} 
            </h4>
            <p>{description}</p>
        </div>
        </Link>
    );
}

export default CompanyCard;