import React, { useState, useEffect } from 'react';
export const MyContext = React.createContext();

const MyProvider = ({ children }) => {
    const [lightmode, setLightmode] = useState(false)
    return (
        <MyContext.Provider value={{
            lightmode,
            setLightmode
        }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider