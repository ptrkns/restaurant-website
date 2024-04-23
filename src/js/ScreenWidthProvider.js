import React from 'react';
import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

const ScreenWidthContext = createContext();

export const useScreenWidth = () => {
    return useContext(ScreenWidthContext);
};

const ScreenWidthProvider = ({ children }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScreenWidthContext.Provider value={screenWidth}>
            { children }
        </ScreenWidthContext.Provider>
  )
}

export default ScreenWidthProvider;