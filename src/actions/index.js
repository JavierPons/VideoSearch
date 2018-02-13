export function selectBook(book) {
    //el libro seleccionado es  ACtionCreatro, necesita devolver una acción,
    // un objeto con type property.

    return {
            type: 'BOOK_SELECTED',
            payload: book 
    };

}