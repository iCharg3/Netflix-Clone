import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { HomePage} from './pages/home';
import * as ROUTES from './constants/routes';
import { SignInPage } from './pages/signin';
import { SignUpPage } from './pages/signup';
import { BrowsePage } from './pages/browse';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';

export default function App() {
  const { user } = useAuthListener();
  
  return (
      <Router>
        <Routes>
          <Route exact path={ROUTES.HOME} element={<HomePage/>} />
          <Route path={ROUTES.SIGN_UP} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} ><SignUpPage/></IsUserRedirect>} />
          <Route path={ROUTES.SIGN_IN} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} ><SignInPage/></IsUserRedirect>} />
          <Route path={ROUTES.BROWSE} element={<ProtectedRoute user={user} replace><BrowsePage/></ProtectedRoute>} />
        </Routes>
      </Router>
  );
}