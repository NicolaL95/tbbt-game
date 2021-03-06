import react, { Component } from "react";

import { gadgets } from '../../utils/utils';
import './Advertising.css'

class Advertising extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            counter: this.state.counter === 7 ? this.state.counter = 0 : this.state.counter + 1
        });
    }
    render() {
        return (
            <section className="advertising">
                <img src={gadgets[this.state.counter].image}/> 
                
                <div> Acquista ora per soli <span>{gadgets[this.state.counter].price} &euro;</span></div>
                <div className="description">{gadgets[this.state.counter].description}</div>

            </section>
        );
    }
}

export default Advertising