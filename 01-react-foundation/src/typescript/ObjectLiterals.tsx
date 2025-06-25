
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    country: string;
    houseNo: number;
}
/* Using interfaces makes easier to do object or array destructuring*/
/* See below */


export const ObjectLiterals = () => {

    const person: Person = {
        age: 37,
        firstName: "Eduardo",
        lastName: "Córdoba",
        address: {
            country: 'Canada',
            houseNo: 615
        }
    }
    //const {address} = person; // object destructuring
    return (
    <>
        <h3>Objetos literales</h3>
        <pre>{ JSON.stringify (person, null, 2)}</pre>
        
    </>
  )
}

