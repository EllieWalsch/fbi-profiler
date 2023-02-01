module.exports = {
    averageScore: (data) => {
        const array = JSON.parse(data);
        const total = array.reduce((acc, c) => acc + c, 0);
        return Math.round(100*total/array.length)/100
    }
}