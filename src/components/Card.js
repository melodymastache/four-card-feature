import React from 'react';
import '../App.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            imgSrc: props.imgSrc
        }
    }
    render() {
        return (
            <div className='cards'>
                <div>
                    <h3>{this.state.title}</h3>
                    <p>{this.state.text}</p>
                </div>
                <div>
                    <img src={this.state.imgSrc} alt="icon" />
                </div>
            </div>
        );
    }

}

export default Card;