import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Checkout = () => {

    const service = useLoaderData();
    const { title, _id, price} = service;
    const {user } = useContext(AuthContext);

    const handleBookService =event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order ={
            customerName:name,
            email,
            date,
            price:price,
            service:_id,
        }
        console.log(order);

    }

    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service: {title} </h2>
             
            <form onSubmit={handleBookService} >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={`$ ` +price} className="input input-bordered" />

                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input className="btn btn-secondary btn-block" type="submit" value="Order Confrim" />
                    </div>
                </form>
            <div className="card-body">
               
            </div>
        </div>

    );
};

export default Checkout;