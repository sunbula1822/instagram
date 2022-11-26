import React from 'react';
import "./style.css"
const Footer = ({ caption, username }) => {

    return (
      <div className="p-4 pt-2 pb-0">
        <span className="mr-1 font-bold">{username}</span>
            <span className="jhdshdcs">{caption.slice(0, 60)} <br />{ caption.slice(60,100)}</span>
      </div>
    );
};

export default Footer;
