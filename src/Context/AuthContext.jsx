import React, { createContext } from 'react';
import useAuthContext from '../Hooks/useAuthContext';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { loginUser, registerUser, user, logoutUser, updateUserProfile, changePassword } = useAuthContext();  

    return (
        <AuthContext.Provider value={{ loginUser, registerUser, user, logoutUser, updateUserProfile, changePassword }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
