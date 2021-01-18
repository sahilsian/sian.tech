import React, { useState, useEffect } from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children }) => {
    const [siteTheme, setSiteTheme] = useState(false)
    return (
        <MyContext.Provider value={{
            siteTheme,
            setSiteTheme
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider