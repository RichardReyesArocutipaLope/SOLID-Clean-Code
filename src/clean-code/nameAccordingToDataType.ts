// =================================
// * NOMBRES SEGÚN EL TIPO DE DATO
// =================================

(() => {
    // * Arreglos - Arrays

    // Malo
    const fruit = ['Manzana', 'platano', 'fresa']

    // Regular
    const fruitList = ['Manzana', 'platano', 'fresa']

    // Bueno
    const fruits = ['Manzana', 'platano', 'fresa']

    // Mejor
    const fuitNames = ['Manzana', 'platano', 'fresa']
})();

(() => {
    // * Booleanos - Booleans

    // Malo
    const open = true;
    const write = true;
    const fruit = true;
    const active = true;
    const noValues = true;
    const notEmpty = true;

    // mejor
    const isOpen = true;
    const canWrite = true;
    const hasFruit = true;
    const isActive = true;
    const hasValues = true;
    const isEmpty = true;
})();


(() => {
    // * Números

    // Malo
    const fruits = 3;
    const cars = 10;

    // mejor
    const maxFruits = 5;
    const minFruits = 5;
    const totalFruits = 5;
    const totalOfCars = 5;
})();

(() => {
    // * Funciones

    // Malo
    createUserIfNotExists();
    updateUserIfNotEmpty();
    sendEmailIfFieldsValid();

    // mejor
    createUser();
    updateUser();
    sendEmail();
})();


