import React from "react";
import { Route, Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children}){
    return (
        user ? <Navigate to={{pathname: loggedInPath}} replace /> : children 
    )
}

export function ProtectedRoute({ user, children }) {
    return (
        user ?  children : <Navigate to={'/signin'} replace />
    );
  }
  