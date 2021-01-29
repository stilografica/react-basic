import Book from './book'; 
import Library from "./library.json"

export default () => {
    const libraryComponents = Library.map(book => <Book title={book.title} author={book.author} />)
    
    return (
        <div>
            {libraryComponents}
        </div>
    );
};