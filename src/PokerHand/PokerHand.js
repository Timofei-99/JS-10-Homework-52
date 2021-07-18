class PokerHand {
    Flash = (array) => {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].suit !== array[j].suit) {
                    count++;
                }
            };
        };
        return count;
    };

    Pare = (array) => {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].rank === array[j].rank) {
                    count ++;
                }
            }
        };
        return count;
    };


    myCombination(array) {
        if (this.Flash(array) === 5) {
            return 'Флеш!'
        }

        if(this.Pare(array) === 1) {
            return 'Одна Пара!'
        } else if (this.Pare(array) === 2) {
            return 'Две Пары!'
        } else if (this.Pare(array) === 3) {
            return 'Тройка!'
        }
    };
}


export default PokerHand;