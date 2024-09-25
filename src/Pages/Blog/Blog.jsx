import React from 'react';
import Blog1 from '../../../public/img/blog1.jpg'
import Blog2 from '../../../public/img/blog2.jpg'
import Blog3 from '../../../public/img/blog3.jpg'
import Vector from '../../assets/img/vector.svg'

const Blog = () => {
    return (
        <div className='bg-[#1e1f27]'>
            <div className="container mx-auto">
                <h1 className="text-4xl text-white">Blog</h1>
                <div className="blog-content h-80 flex p-8">
                    <img className='w-1/4 pe-6' src={Blog1} alt="" />
                    <div className="flex flex-col justify-between w-3/4">
                        <h1 className="text-4xl text-white">Top 3 Destinations to Visit in Dubai in a Rental Car</h1>
                        <p className="text-xl text-slate-200">One of the main reasons to hire a car in Dubai is the quality of the UAE roads. According to the World Economic Forum, the Emirates belong to the top seven countries with the most exemplary road infrastructure.</p>
                        <div className='flex items-center justify-between'>
                            <p className="text-slate-300 text-base">25 Seb 2022</p>
                            <img src={Vector} alt="img" />
                        </div>
                    </div>
                </div>

                <div className="blog-content h-80 flex p-8 ">
                    <img className='w-1/4 pe-6' src={Blog2} alt="" />
                    <div className="flex flex-col justify-between w-3/4">
                        <h1 className="text-4xl text-white">
                            Top 5 wonderful spots for a car photo session in Dubai</h1>
                        <p className="text-xl text-slate-200">There are so many wonderful things to do in Dubai, but when you rent a car your opportunities are nearly doubled. The number of places you will die to go to and make memorable pictures is such that it makes you impossible to resist to hire a mode of transportation, if not for a day or two, then at least for a couple of hours. And, while doing so, who could prove against the weakness of taking a photo of themselves inside or near the car they’ve rented?</p>
                        <div className='flex items-center justify-between'>
                            <p className="text-slate-300 text-base">11 Feb 2022</p>
                            <img src={Vector} alt="img" />
                        </div>
                    </div>
                </div>

                <div className="blog-content h-80 flex p-8">
                    <img className='w-1/4 pe-6' src={Blog3} alt="" />
                    <div className="flex flex-col justify-between w-3/4">
                        <h1 className="text-4xl text-white">Top 5 Reasons to Rent a Car Dubai Style this Summer</h1>
                        <p className="text-xl text-slate-200">Summer is more than just a beach and a body, and Autozoom Luxury Car Rental is more than just a regular car hire business. We're your one-stop four-wheel solution to making the most of your time in Dubai.</p>
                        <div className='flex items-center justify-between'>
                            <p className="text-slate-300 text-base">25 Seb 2022</p>
                            <img src={Vector} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
