

//Generic

function farhad<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updateArray = farhad(demoArray, -1);
//updateArray[0].split('');

const stringArray = farhad(['a','b','c'], 'd');
stringArray[0].split('');