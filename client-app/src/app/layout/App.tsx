import React from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../fatures/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../../fatures/home/HomePage';
import ActivityForm from '../../fatures/activities/form/ActivityForm';
import ActivityDetails from '../../fatures/activities/details/ActivityDetails';
import TestError from '../../fatures/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../fatures/errors/NotFound';
import ServerError from '../../fatures/errors/ServerError';

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      {location.pathname === '/' ? <></> : <NavBar /> }
      <Container style={{marginTop: location.pathname === '/' ? 0 :  '7em'}}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/activities' element={<ActivityDashboard />}/>
          <Route path='/activities/:id' element={<ActivityDetails />}/>
          <Route key={location.key} path='/createActivity' element={<ActivityForm />}/>
          <Route key={location.key} path='/manage/:id' element={<ActivityForm />}/>
          <Route path='/errors' element={<TestError />}/>
          <Route path='/server-error' element={<ServerError />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
