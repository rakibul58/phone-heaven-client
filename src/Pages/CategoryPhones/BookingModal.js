
import React from 'react';
import toast from 'react-hot-toast';

const BookingModal = ({setPhoneInfo, phoneInfo, currentUser , refetch }) => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const customer_number = form.customer_number.value;
        const meeting_location = form.meeting_location.value;

        const booking = {

            customer_name: currentUser.name,
            customer_email: currentUser.email,
            customer_id: currentUser._id,
            customer_number,
            meeting_location,
            price: phoneInfo.price

        }

        console.log(booking);
        setPhoneInfo(null);

        fetch(`http://localhost:5000/bookings/${phoneInfo._id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(result => {
                toast.success(`${phoneInfo.model} Booked Successfully`);
                setPhoneInfo(null);
                refetch();
            });

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit} className="modal-box">
                    <h3 className="font-bold text-accent text-lg">{phoneInfo.model}</h3>
                    <input type="text" defaultValue={currentUser.name} readOnly className="input input-bordered w-full mt-3 mb-3" />
                    <input type="text" defaultValue={currentUser.email} readOnly className="input input-bordered w-full mb-3" />
                    <input type="text" defaultValue={phoneInfo.price + " Taka"} readOnly className="input input-bordered w-full mb-3" />
                    <input type="text" name='customer_number' placeholder="Phone Number" className="input input-bordered w-full mb-3" />
                    <input type="text" name='meeting_location' placeholder="Meeting Location" className="input input-bordered w-full mb-3" />
                    <div className="modal-action">
                        <input className='btn btn-outline btn-sm btn-accent' type="submit" value="Book Phone" />
                        <label htmlFor="booking-modal" className="btn btn-sm btn-outline text-white hover:bg-white">Close</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;