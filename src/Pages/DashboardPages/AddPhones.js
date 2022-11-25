import React from 'react';
import { Link } from 'react-router-dom';

const AddPhones = () => {
    return (
        <div className='lg:ml-10'>
            <h4 className='text-accent text-2xl font-bold'>Add a Phone</h4>
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 mt-6">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Model</span>
                        </label>
                        <input type="text" placeholder="Phone Model" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file" className="file-input w-full max-w-xs rounded-lg input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn bg-gradient-to-r from-secondary to-primary text-white hover:text-opacity-80' type="submit" value="Add Phone" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddPhones;