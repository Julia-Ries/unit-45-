import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';


function SignupForm({signup}){

    const history = useHistory();
    const [formData, setFormData]= useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    const [formErrors, setFormErrors]= useState([]);

    async function handleSubmit(evt){
        evt.preventDefault();
       let result = await signup(formData);
        if(result.success) {
            history.push('/companies');
        } else {
            setFormErrors(result.errors)
        }
    }

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(data => ({...data, [name]: value}));
    }

    return (
        <div className='SignupForm'>
            <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input
                    name="username"
                    className='form-control'
                    value= {formData.username}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Password</label>
                <input
                    name="password"
                    className='form-control'
                    value= {formData.password}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>First Name</label>
                <input
                    name="firstName"
                    className='form-control'
                    value= {formData.firstName}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Last Name</label>
                <input
                    name="lastName"
                    className='form-control'
                    value= {formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    name="email"
                    type='email'
                    className='form-control'
                    value= {formData.email}
                    onChange={handleChange}
                />
            </div>

            <button 
            type='submit'
            className='btn'
            onSubmit={handleSubmit}>
                Submit
            </button>
          </form>
        </div>
    );
}


export default SignupForm;
