import React from 'react';

const RatingNavbar: React.FC = () => {

  return (
    <>
        <div className='navbar rating-menu'>
            <button className='link-button rating-btn'>Excelentes</button>
            <button className='link-button rating-btn'>Bons</button>
            <button className='link-button rating-btn'>Maus</button>
            <button className='link-button rating-btn'>E os Feios...</button>
        </div>
    </>
  );
};

export default RatingNavbar;
