import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div>
            <h3>Congratulations! You have <strong> {bookings.length} </strong> bookings</h3>
            {
                bookings.map(book =>
                    <li
                        key={book._id}>
                        {book.name}
                        from
                        {book.checkIn}
                        to
                        {book.checkOut}
                    </li>)
            }
        </div>
    );
};

export default Bookings;