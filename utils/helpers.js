module.exports = {
    averageScore: (data) => {
        let array = JSON.parse(data);
        const arrayFix = array.filter(val => val !== 0)
        const total = arrayFix.reduce((acc, c) => acc + c, 0);
        if(isNaN(Math.round(100*total/arrayFix.length)/100)){
            return 0
        } else {
            return Math.round(100*total/arrayFix.length)/100
        }
    }
}