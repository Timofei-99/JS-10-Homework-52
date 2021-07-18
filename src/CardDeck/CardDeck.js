class CardDeck {
    constructor() {
        this.suits = ['♥', '♦', '♣', '♠'];
        this.ranks = [2, 3, 4, 5, 6, 7, 8 , 9, 10, 'J', 'Q', 'K', 'A'];

        this.cards = [];

        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                const card = {suit: this.suits[i], rank: this.ranks[j]};
                this.cards.push(card);
            }
        }
        console.log(this.cards)
    }

    getCard() {
        const random = Math.floor(Math.random() * this.cards.length);
        const randomCard = this.cards[random];
        this.cards.splice(random, 1);
        return randomCard;
    }

    getCards(howMany){
        const newArray = [];
        for (let i = 0; i < howMany; i++){
            newArray.push(this.getCard());
        }
        return newArray;
    }

}

export default CardDeck;