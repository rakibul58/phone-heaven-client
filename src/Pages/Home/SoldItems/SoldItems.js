import React from 'react';

const SoldItems = () => {
    return (
        <div className='mt-20 mb-44'>
            <section className='text-center mb-12'>
                <h4 className='text-2xl font-bold text-accent'>Recently Sold</h4>
                <h1 className='text-5xl'>These are some of the recently sold phones</h1>
            </section>
            <section className="py-6">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://images.unsplash.com/photo-1574678720375-897c87118486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="w-full animate hover:animate-pulse h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1545063328-c8e3faffa16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1502201563651-826cbb30c3dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0cGhvbmVzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1640936343842-268f9d87e764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=547&q=80" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1621330396167-b3d451b9b83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c21hcnRwaG9uZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9iaWxlJTIwcGhvbmV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square animate hover:animate-pulse" src="https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNlbGwlMjBwaG9uZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" />
                    <img src="https://images.unsplash.com/photo-1585035885549-fa5fa85d1d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square animate hover:animate-pulse" />
                </div>
            </section>
        </div>
    );
};

export default SoldItems;