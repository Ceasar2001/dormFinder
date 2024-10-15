import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
            {/* 1st footer part */}
            <div>
                {/* logo */}
            <div className="flex items-center space-x-2">
                <div className="md:w-10 md:h-10 w-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col">
                    <FaHouse />
                </div>
                <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
                    DormFinder
                </h1>
            </div>

            <p className='text-gray-300 mt-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae architecto libero molestias? Alias quod, quos odio vero aliquid optio molestias.</p>
            <p className='text-gray-300 mt-4 font-semibold'>ecleoceasar1@gmail.com</p>
            <p className='text-gray-300 mt-2 font-semibold'>+63 949 8251 349</p>

            {/* socail links */}
            <div className='flex items-center space-x-4 mt-6'>
                <FaFacebookF className='w-6 h-6 text-blue-600'/>
                <FaYoutube className='w-6 h-6 text-red-500'/>
                <FaInstagram className='w-6 h-6 text-pink-600'/>
            </div>
            </div>
            {/* 2nd footer */}
            <div className="md:mx-auto">
                <h1 className="footer__heading">Popular Search</h1>
                <p className="footer__link">Boarding House Long Term</p>
                <p className="footer__link">Boarding House Short Term</p>
                <p className="footer__link">Dormitory Long Term</p>
                <p className="footer__link">Dormitory Short Term</p>
            </div>
            {/* 3rd footer */}
            <div className="lg:mx-auto">
                <h1 className="footer__heading">Quick Link</h1>
                <p className="footer__link">Terms of use</p>
                <p className="footer__link">Privacy Policies</p>
                <p className="footer__link">Pricing Plan</p>
                <p className="footer__link">Our Services</p>
                <p className="footer__link">Contact Support</p>
                <p className="footer__link">FAQs</p>
            </div>
            {/* 4th footer */}
            <div className="md:mx-auto">
                <h1 className="footer__heading">Discover</h1>
                <p className="footer__link">Liboon</p>
                <p className="footer__link">Villa Paraeso</p>
                <p className="footer__link">For Boys only</p>
                <p className="footer__link">For Girls only</p>
                <p className="footer__link">Mixed</p>
            </div>
        </div>
        <p className="text-center mt-4 text-base text-white opacity-70">Developed By Group 4 | 2024</p>
    </div>
  )
}

export default Footer
