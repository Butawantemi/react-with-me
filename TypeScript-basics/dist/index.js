"use strict";
class userAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new userAccount("japhet", 1);
console.log(user);
const getLength = (obj) => {
    return obj.length;
};
console.log(getLength("Japhet"));
const wrapInArray = (obj) => {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
};
console.log("Jackson" /* ["Japhet", "Josia", "Josephat", "Jovin"] */);
const logPoint = (p) => {
    console.log(`${p.x} ${p.y}`);
};
const point = { x: 20, y: 40 };
logPoint(point);
