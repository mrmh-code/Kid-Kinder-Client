import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            <div className='text-center mt-5'>
          <Link to={'/'}>  <button className='btn btn-success'>Go Back to Home</button></Link><br/> <br/> 
            <img src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0JTIwcGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    );
};

export default NotFoundPage;