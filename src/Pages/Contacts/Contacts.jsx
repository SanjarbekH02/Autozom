import React from 'react';
import Location from '../../../public/img/location.svg'
import Tell from '../../../public/img/tell.svg'
import Email from '../../../public/img/email.svg'
import '../../styles/Contacts.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Contacts = () => {

    const position = { lat: 51.505, lng: -0.09 };
    const GOOGLE_MAP = 'https://www.google.com/maps/@25.0470837,55.2161922,19z?entry=ttu&g_ep=EgoyMDI0MDkyMi4wIKXMDSoASAFQAw%3D%3D'

    return (
        <div className='bg-[#1e1f27]'>
            <div className="container mx-auto">
                <h1 className="text-4xl text-white pt-8  pb-8">HAVE ANY QUESTIONS?</h1>
                <p className="text-xl text-slate-300">We would love to help
                    Auto Zoom Car Rental Dubai, is the best luxury car rental Dubai based company.</p>

                <h3 className="text-3xl text-white pt-20 ps-6">Head Office</h3>
                <div className='flex pt-4 pb-2'>
                    <img src={Location} alt="location image" />
                    <span className='text-xl text-white ps-3'>Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates</span>
                </div>

                <div className='flex pb-2'>
                    <img src={Tell} alt="location image" />
                    <a href='tell:+971527030189' className='text-xl text-white ps-3'>+971 52 7030189</a>
                </div>

                <div className='flex pb-14'>
                    <img src={Email} alt="location image" />
                    <a href="mailto: office@autozoomrental.com" className='text-xl text-white ps-2'>office@autozoomrental.com</a>
                </div>

                <div className="location-block">
                    <LoadScript googleMapsApiKey="ABC123XYZ"> {/* O'zingizning API kalitingizni qo'shing */}
                        <GoogleMap
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                            center={position}
                            zoom={13}
                        >
                            <Marker position={position} />
                        </GoogleMap>
                    </LoadScript>
                </div>

            </div>
        </div>
    );
}

export default Contacts;
