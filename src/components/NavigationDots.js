import React from 'react';

const NavigationDots = ({active}) => {
    return (
        <div className='app__navigation' >
             {['about me', 'projects', 'skills','contact'].map((item, index) => (
    
                  <a 
                  className='app__navigation-dot' 
                  style={ active === item ? {backgroundColor: "#313bac"}: {} }
                  key={item + index }
                  href={`#${item}`} 
                //   onClick={() => setToggle(false)}
                  />

              ))}
        </div>
    );
};

export default NavigationDots;