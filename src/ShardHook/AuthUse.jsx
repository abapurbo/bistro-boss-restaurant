import React, { useContext } from 'react';
import { Context } from '../AuthContext/AuthContext';

const AuthUse = () => {
    const authContext=useContext(Context)
    return authContext
};

export default AuthUse;