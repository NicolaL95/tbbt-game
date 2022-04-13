import React from "react";

import PropTypes from "prop-types";

// css 
import './UiButton.css'

function UiButton(props) {
    function clickBtn() {
        return props.callback(props.id)
    }
    return (

        <button className={props.cssCustom} onClick={clickBtn}>
            {props.nameBtn}
            {props.children}
        </button>
    )
}

// default props 

UiButton.defaultProps = {
    cssCustom: 'btnDefault'
}

// propTypes 
UiButton.propTypes = {
    nameBtn: PropTypes.string,
    callback: PropTypes.func.isRequired,
    cssCustom: PropTypes.string
}


export default UiButton