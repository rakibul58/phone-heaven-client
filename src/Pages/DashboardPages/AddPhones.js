import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddPhones = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: currentUser = [] } = useQuery({
        queryKey: ['currentUser'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/users?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://mobile-heaven-server.vercel.app/categories`);
                const data = res.json();
                return data;
            } catch (error) {

            }
        }
    });

    const handleSubmitPhone = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const phone = {
                        seller: currentUser.name,
                        email: currentUser.email,
                        verified: currentUser?.verified ? true : false ,
                        category: data.category,
                        condition: data.condition,
                        description: data.description,
                        image: imgData.data.url,
                        location: data.location,
                        model: data.model,
                        original_price: data.original_price,
                        phone: data.phone,
                        price: data.price,
                        used_for: data.used_for,
                        post_date: new Date().toDateString(),
                        status: "unsold"
                    };

                    fetch('https://mobile-heaven-server.vercel.app/phones', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(phone)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`${data.model} Added Successfully`);
                            navigate('/dashboard/myphones')
                        });
                }
            });

    }

    return (
        <div className='lg:ml-10'>
            <h4 className='text-accent text-2xl font-bold'>Add a Phone</h4>
            <form onSubmit={handleSubmit(handleSubmitPhone)} className="card w-full shadow-2xl bg-base-300 mt-6">
                <div className="card-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Model</span>
                        </label>
                        <input {...register("model", { required: "Name is required" })} type="text" placeholder="Phone Model" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input {...register("image", { required: "Image is required" })} type="file" className="file-input w-full max-w-xs rounded-lg input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input {...register("price", { required: "Price is required" })} type="text" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input {...register("original_price", { required: "Original Price is required" })} type="text" placeholder="Original Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Used For</span>
                        </label>
                        <input {...register("used_for", { required: "Used for is required" })} type="text" placeholder="Used For" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input {...register("condition", { required: "Condition is required" })} type="text" placeholder="Condition" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile Number</span>
                        </label>
                        <input {...register("phone", { required: "Phone Number is required" })} type="text" placeholder="Mobile Number" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input {...register("location", { required: "Location is required" })} type="text" placeholder="Location" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register("category", { required: "Category is required" })} className="select select-bordered w-full">
                            {
                                categories.map(category => <option key={category._id} value={category._id}>
                                    {category.category_name}
                                </option>)
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input {...register("description", { required: "Description is required" })} type="text" placeholder="Description" className="input input-bordered" />
                    </div>
                </div>
                <div className='pl-8 pb-8'>
                    <input className='btn bg-gradient-to-r from-secondary to-primary text-white hover:text-opacity-80' type="submit" value="Add Phone" />
                </div>
            </form>
        </div>
    );
};

export default AddPhones;