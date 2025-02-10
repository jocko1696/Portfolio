import React from 'react';
import {RiInstagramFill} from "react-icons/ri";
import {LiaLinkedin} from "react-icons/lia";
import {LiaGithubAlt} from "react-icons/lia";


const SocialIcons = () => {
    return (
        <div className="social-icons">
            <a href="https://www.instagram.com/jocko1696/" className="icon"><RiInstagramFill/></a>
            <a href="https://www.linkedin.com/in/jovana-gluhovi%C4%87-65635616a/?originalSubdomain=ba"
               className="icon"> <LiaLinkedin/></a>
            <a href="https://github.com/jocko1696" className="icon"><LiaGithubAlt/></a>
        </div>
    );
};

export default SocialIcons;