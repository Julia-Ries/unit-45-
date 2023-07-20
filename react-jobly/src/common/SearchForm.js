import React, {useState} from 'react';
import "./SearchForm.css"


function SearchForm({search}){
    
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(evt){
        evt.preventDefault();
        search(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    function handleChange(evt){
        setSearchTerm(evt.target.value);
    }


    return(
        <div className='SearchForm'>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                name="searchTerm"
                placeholder='Enter search term'
                value={searchTerm}
                onChange={handleChange}
                />
            <button type='submit' className='btn'>
                Submit
            </button>
            </form>

        </div>
    );
}

export default SearchForm;