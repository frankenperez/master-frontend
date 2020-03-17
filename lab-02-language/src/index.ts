// JAVASCRIPT
console.log("JAVASCRIPT LANG");

// Sample data
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [6, 7, 8, 9, 10];
const arrayC = [11, 12, 13, 14, 15];
const objectA = {name: "Maria", surname: "Ibañez", country: "SPA"}; 
const objectB = {name: "Luisa", age: 31, married: true};

// 1. Array Operations

/**
 * Función head que devuelve el primer elemento de un array empleando destructuring.
 * @param array - Array de entrada
 */
const head = (array) => {
    const [firstElement] = array;
    return firstElement;
};
console.log("1. Array Operations - Head");
console.log(head(arrayA));

/**
 *  Función tail que devuelve todos los elementos de un array menos el primero de ellos empleando rest operator.
 * @param array - Array de entrada
 */
const tail = (array) => {
    let [, ...rest] = array;
    return rest;
};
console.log("1. Array Operations - Tail");
console.log(tail(arrayA));

/**
 * Función init que devuelve todos los elementos de un array menos el último empleando los métodos que ofrece Array.prototype.
 * @param array - Array de entrada
 */
const init = (array) => {
    return array.slice(0, -1);
};
console.log("1. Array Operations - Init");
console.log(init(arrayA));

/**
 * Función last que devuelve el último elemento de un array.
 * @param array  - Array de entrada
 */
const last = (array) => {
    return array.slice(-1);
};
console.log("1. Array Operations - Last");
console.log(last(arrayA));


// 2. Concat

/**
 * Función concat que devuelve la concatenación de 2 arrays empleando rest / spread operators.
 * @param a - Array de entrada a
 * @param b - Array de entrada b
 */
const concat = (a, b) => {
    return [...a, ...b];
};
console.log("2.- Concat");
console.log(concat(arrayA, arrayB));

/**
 * Función concatMultipleArrays que devuelve la concatenación de múlples arrays de entrada.
 * @param arrays - Múltiples arrays de entrada
 */
const concatMultipleArrays = (...arrays) => {
    return arrays.reduce((result, array) => [...result, ...array], []);
};
console.log("2.- ConcatMultipleArrays");
console.log(concatMultipleArrays(arrayA, arrayB, arrayC));


// 3. Clone merge

/**
 * Función clone que devuelve un nuevo objeto con las propiedades el objeto de entrada.
 * @param source - Objeto de entrada
 */
const clone = (source) => {
    return { ...source };
};
console.log("3.- Clone");
console.table(clone(objectA));

/**
 * Función merge que, dados dos objetos de entrada source y target, devuelve un nuevo objeto con todas las propiedades de target y source
 * En caso de propiedades con el mismo nombre, source sobreescribe a target
 * @param source - Objecto de entrada cuyos valores prevalecen
 * @param target - Objeto de entrada
 */
const merge = (source, target) => {
    return { ...clone(target), ...clone(source) };
};
console.log("3. - Merge");
console.table(merge(objectA, objectB));


// TYPESCRIPT
console.log("TYPESCRIPT LANG");

// 4. Read books

interface Book {
    title: string;
    isRead: boolean;
}

const books: Array<Book> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

/**
 * Función isBookRead que devuelve si se ha leído o no un libro en caso de existir en el listado de libros.
 * @param books - Lista de libros Array<Book>
 * @param titleToSearch - Título del libro a comprobar
 */
const isBookRead = (books: Array<Book>, titleToSearch: string): boolean => {
    return books.find((book: Book) => {
        return (book.title === titleToSearch && book.isRead);
    }) !== undefined ? true : false;
}
console.log("4.- Read books")
console.log(`Devastación is read: ${isBookRead(books, "Devastación")}`);
console.log(`Canción de hielo y fuego is read: ${isBookRead(books, "Canción de hielo y fuego")}`);
console.log(`Los Pilares de la Tierra is read: ${isBookRead(books, "Los Pilares de la Tierra")}`);

// 5. Slot Machine

/**
 * La clase representa una máquina tragaperras con un contador de monedas y una ruleta de slots.
 * Cuando se juega, el número de monedas incrementa y en caso de que los tres slots sean true, el jugador gana el premio acumulado.
 */
class SlotMachine {
    private coinsCounter : number;
    
    constructor() {
        this.coinsCounter = 0;
    }

    private getRouletteResult(): Array<boolean> {
        return [Math.random() >= 0.5, Math.random() >= 0.5, Math.random() >= 0.5]
    }

    public play() {
        this.coinsCounter ++;
        const rouletteResult: Array<boolean> = this.getRouletteResult();
        if (rouletteResult.some((value) => value === false)) {
            console.log("Good luck next time!!");
        } else {
            console.log(`Congratulations!!!. You won ${this.coinsCounter} coins!!`)
            this.coinsCounter = 0;
        }
    }
}

console.log("5.- Slot Machine")
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();