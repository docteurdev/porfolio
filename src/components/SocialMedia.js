import React from 'react';
 import {BsTwitter, BsInstagram} from "react-icons/bs";
 import {FaFacebook, FaLinkedin} from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className='app__social' >
            <div>
                <BsTwitter/>
            </div>
            <div>
                <FaFacebook/>
            </div>
            <div>
                <FaLinkedin/>
            </div>
        </div>
    );
};

export default SocialMedia;