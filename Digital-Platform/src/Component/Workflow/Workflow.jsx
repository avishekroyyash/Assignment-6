import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-indigo-600 min-h-[447px] flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h1 className='text-white font-bole text-[40px]'>Ready to Transform Your Workflow?</h1>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <span className='flex gap-3'>
                 <button className='btn bg-white text-indigo-600 rounded-2xl'>Explore Products</button>
                <button className='btn bg-transparent text-white rounded-2xl' >View Pricing</button>
                </span>
                <h2 className='text-white'>14-day free trial • No credit card required • Cancel anytime</h2>
            </div>
        </div>
    );
};

export default Workflow;