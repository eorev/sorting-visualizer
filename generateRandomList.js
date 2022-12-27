const max = 1000;
const min = 1;

function generateRandomList(){
    const list = [];
    for (let i = 0; i < 100; i++) {
        list.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return list;
}

export default generateRandomList;