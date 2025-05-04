
interface User {
    id: number,
    name: string
}


class userAccount {
    name: string
    id: number

    constructor(name: string, id:number) {
        this.name = name
        this.id = id
    }
}


const user : User = new userAccount("japhet", 1)

console.log(user)

const getLength = (obj : string | string[]) => {
    return obj.length;
}

console.log(getLength("Japhet"))

const wrapInArray = (obj: string | string[]) => {
    if (typeof obj === "string") {
        return [obj]
    }

    return obj
}

console.log("Jackson"/* ["Japhet", "Josia", "Josephat", "Jovin"] */)

interface Point {
    x: number
    y: number
}

const logPoint = (p: Point) => {
    console.log(`${p.x} ${p.y}`)
}

const point = {x: 20, y: 40}
logPoint(point)