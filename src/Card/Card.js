import React from "react";
import '../Card/Card.css';

const myClass = {
    '♥': 'hearts' ,
    '♦': 'diams',
    '♠': 'spades',
    '♣': 'clubs' ,
};

class Card extends React.Component {
    render() {
        return (
            <div className={`card ${this.props.back}${this.props.rank.toString().toLowerCase()} ${myClass[this.props.suit]}`}>
                <span className="rank">{this.props.rank}</span>
                <span className="suit">{this.props.element}</span>
            </div>
        );
    }
}

export default Card;