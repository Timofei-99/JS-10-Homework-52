class PokerHand {
    getFlash = (array) => {
        let count = 0;
        for (let i = 0; i < array.length; i++){
            for (let j = i + 1; j < array.length; j++){
                if (array[i].suit !== array[j].suit){
                    count++;
                };
            };
        };
        return count;
    };

    getPare = (array) => {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i].rank === array[j].rank){
                    count ++;
                };
            };
        };
        return count;
    };


    getCombination(array) {
        if (this.getFlash(array) === 5){
            return 'Флеш !!!'
        };

        if(this.getPare(array) === 1) {
            return 'Одна Пара!'
        } else if (this.getPare(array) === 2) {
            return 'Две Пары!'
        } else if (this.getPare(array) === 3) {
            return 'Ураа СЕТ!'
        }else if(this.getPare(array)===4){
            return 'Карэ!'
        }else if(this.getPare(array)===0){
            return 'Попробуй снова!'
        }
    };
};


export default PokerHand;