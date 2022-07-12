import React from 'react';
 import {BsTwitter, BsInstagram} from "react-icons/bs";
 import {FaFacebook, FaLinkedin} from "react-icons/fa";
const SocialMedia = () => {
    return (
        <div className='app__social' >
            <div>
                    <a href='https://twitter.com/BaobabDiscret?t=DmmUQSyNAW5xpmS5GdlQuA&s=09'>
                   <BsTwitter/>

                    </a>
            </div>
            
            <div>
                    <a href='https://www.linkedin.com/in/adje-oumar-065751222' >
                    <FaLinkedin/>

                    </a>
            </div>
        </div>
    );
};

export default SocialMedia;