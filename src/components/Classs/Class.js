import React, { useEffect, useState } from 'react';
import ClassesData from '../ClassesData/ClassesData';

const Class = () => {
    const [classes,setClasses]=useState([]);

    useEffect(()=>{
        fetch(`https://server-site-alpha.vercel.app/classes`)
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])
    return (
        <div>
             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" style={{margin:"0 6rem"}}> 
                 {

            classes==false? <div style={{margin:"10rem auto"}}><p>Loading.....</p><div className="spinner-border p-4" role="status">
                                        
            <span className="visually-hidden">Loading...</span>

            </div></div> :
                    classes.map(u => <ClassesData
                    key={u.id}
                    classData={u}
                    />)
                 }
</div>
        </div>
    );
};

export default Class;