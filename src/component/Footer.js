import React from "react";
import foot from '../img/jellyfish-fields.jpg';
function Footer(){
    return(
        <footer style={{ backgroundImage: `url(${foot})` }}>
            <p>&copy; 2023 My Website. All rights reserved.</p>
            <p><a href="https://github.com/Yim-HaEun">gitURL</a></p>
        </footer>
    )
}
export default Footer;