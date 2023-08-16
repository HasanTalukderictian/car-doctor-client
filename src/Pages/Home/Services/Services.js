import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    
    const [services,setServiecs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=> setServiecs(data))
    },[])



    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
                <h2 className='text-5xl font-bold'>Services Area </h2>
                <p className='mt-1'>the majority have suffered alteration in some form, by injected humour, 
                    or Randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                services.map(service=> <ServicesCart
                key={service._id}
                service={service}>

                </ServicesCart>)
               }
            </div>
        </div>
    );
};

export default Services;