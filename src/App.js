import './App.css';
import {Component} from "react";
import Card from "./Card/Card";
import CardDeck from "./CardDeck/CardDeck";
import PokerHand from "./PokerHand/PokerHand";

class App extends Component {
    state = {
        myCards: [
            {back: 'back', rank: '', suit: '', element: ''},
            {back: 'back', rank: '', suit: '', element: ''},
            {back: 'back', rank: '', suit: '', element: ''},
            {back: 'back', rank: '', suit: '', element: ''},
            {back: 'back', rank: '', suit: '', element: ''}
        ],
        text: ''
    }

    getCardDeck = () => {
        const cardDeck = new CardDeck();
        const myCard = cardDeck.getCards(5);
        console.log(myCard)
        this.setState({
            myCards: [
                {back:'rank-', rank: myCard[0].rank, suit: myCard[0].suit, element: myCard[0].suit},
                {back:'rank-', rank: myCard[1].rank, suit: myCard[1].suit, element: myCard[1].suit},
                {back:'rank-', rank: myCard[2].rank, suit: myCard[2].suit, element: myCard[2].suit},
                {back:'rank-', rank: myCard[3].rank, suit: myCard[3].suit, element: myCard[3].suit},
                {back:'rank-', rank: myCard[4].rank, suit: myCard[4].suit, element: myCard[4].suit},
            ]
        }, () => this.getOutcome());
    };

    getOutcome = () => {
        const hand = new PokerHand();
        const myCombination = hand.myCombination(this.state.myCards);
        this.setState({
            text: myCombination
        },);
    };


  render() {
    return (
        <div className="App">
            <Card back={this.state.myCards[0].back}
                  rank={this.state.myCards[0].rank}
                  suit={this.state.myCards[0].suit}
                  element={this.state.myCards[0].suit}/>
            <Card back={this.state.myCards[1].back}
                  rank={this.state.myCards[1].rank}
                  suit={this.state.myCards[1].suit}
                  element={this.state.myCards[1].suit}/>
            <Card back={this.state.myCards[2].back}
                  rank={this.state.myCards[2].rank}
                  suit={this.state.myCards[2].suit}
                  element={this.state.myCards[2].suit}/>
            <Card back={this.state.myCards[3].back}
                  rank={this.state.myCards[3].rank}
                  suit={this.state.myCards[3].suit}
                  element={this.state.myCards[3].suit}/>
            <Card back={this.state.myCards[4].back}
                  rank={this.state.myCards[4].rank}
                  suit={this.state.myCards[4].suit}
                  element={this.state.myCards[4].suit}/>
            <div>
                <button onClick={this.getCardDeck}>click me</button>
                <h2>{this.state.text}</h2>
            </div>
        </div>
    );
  }
}

export default App;
