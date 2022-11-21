function sum() {
    const array = [1,2,3];
    const total = array.reduce((sum, current) => {
        return sum + current
    });
    return console.log(total);

}

export default sum;

