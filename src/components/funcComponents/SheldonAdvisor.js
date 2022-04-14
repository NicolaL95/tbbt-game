import react from "react";
import head from '../../assets/images/sheldon_head.png'
import './SheldonAdvisor.css'

function SheldonAdvisor(props) {
    return (
        <><img className="sheldon_head" src={head} alt="" />
            {props.children}
        </>
    )


}
export default SheldonAdvisor