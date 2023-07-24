import React from "react";

var year = new Date();

function Footer(){
    return <div className="footer"><footer><p>Copyright. All rights reserved. {year.getFullYear()}</p></footer></div>;
}

export default Footer;