import React from 'react';

const Offer = () => {
    return (
        <div className="p-6 py-12 bg-base-300 shadow-2xl text-gray-50 mb-32 rounded-2xl mx-10">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-4xl tracking-tighter font-bold">Up to 50% 
                        <br/>Off on shipping
                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Plus free shipping! Use code:</span>
                        <span className="font-bold text-lg">Rakibul</span>
                    </div>
                    <div className="btn btn-primary">Shop Now</div>
                </div>
            </div>
        </div>
    );
};

export default Offer;