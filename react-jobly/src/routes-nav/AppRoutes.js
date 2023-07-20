import React from 'react';
import { Route, Routes, Redirect, Switch} from "react-router-dom";
import Homepage from '../homepage/Homepage';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import ProfileForm from '../profiles/ProfileForm';


function AppRoutes({login, signup}){

//     return(
//         <div>
//             <Routes>

//                 <Route exact path='/' Component={Homepage}/>
                

//                 <Route exact path="/companies" Component={CompanyList}/>

//                 <Route exact path='/companies/:handle' Component={CompanyDetail}/>


//                 <Route exact path='/jobs' Component={JobList}/>

//                 <Route exact path='/login' login={login}Component={LoginForm}/>

//                 <Route exact path='/signup' signup={signup} Component={SignupForm}/>

//                 <Route exact path='/profile' Component={ProfileForm}/>

//             </Routes>
//         </div>
//     )

// };

return (
    <div className="pt-5">
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignupForm signup={signup} />
        </Route>

        <Route exact path="/companies">
          <CompanyList />
        </Route>

        <Route exact path="/jobs">
          <JobList />
        </Route>

        <Route exact path="/companies/:handle">
          <CompanyDetail />
        </Route>

        <Route path="/profile">
          <ProfileForm />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
);
}


export default AppRoutes;
