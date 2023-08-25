import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {

    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method:'GET', 
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            },
            body:JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else {
                    navigate('/')
                }
                
            })
    }, [url, navigate]);
    const handleDelete =id =>{
        
        const proceed = window.confirm("Are you  sure want to delete")
        if(proceed){
             fetch(`http://localhost:5000/bookings/${id}`, {
                method:"DELETE",
                
             })
             .then(res => res.json())
             .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted Successful')
                    const remaining  = bookings.filter(bookings=>bookings._id !== id);
                    setBookings(remaining);
                }
             })
            
        }
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`, {
            method:"PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                // update state

                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status ="confirm";
                const newBooking = [updated, ...remaining];
                setBookings(newBooking);
            }
        })

    }

     


    return (
        <div>
            <h2 className='text-5xl'>
                Your Bookings {bookings.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                        }
                       
                            
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default Bookings;