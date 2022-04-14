import React from "react";

import logo from '../../../../../assets/images/TBBT_logo.svg'

// css 
import './UiHeader.css'

function UiHeader() {

    return (
        <header>
            <picture>
                <source media="(min-width: 650px)" srcSet="" />
                <source media="(min-width: 465px)" srcSet="" />
                <img src={logo} />
            </picture>
            <ul>
                <li>
                    Attori
                </li>

                <li>
                    Episodi
                </li>

                <li>
                    Blog
                </li>

                <li>
                    Media
                </li>

                <li>
                    Merchandising
                </li>
            </ul>
            <div className="account_info">
                <p>Sheldon il conquistatore</p>
                <p>Logout</p>
            </div>
        </header>
    )
}



export default UiHeader