import Header from "../../components/Header"
import { useContext } from "react"
import { Context } from "../../context/Context"


export default function Hobbies(){
    const{ books, games, albums} = useContext(Context)

    const collator = new Intl.Collator('en');

    function sortArrayAuthor(x,y){
        return collator.compare(x.data.author, y.data.author);
    }
    function sortArrayTitle(x,y){
        return collator.compare(x.data.title, y.data.title);
    }
    var sorted_games = games.sort(sortArrayTitle);
    
    var sorted_books = books.sort(sortArrayAuthor);

    var sorted_albums = albums.sort(sortArrayAuthor)
    
    console.log(sorted_albums)
    
    return(
        <>
        <Header></Header>

        <div className="container">
            <div className="blogs">
                <div className='row'>
                    <div className="col">
                        <h1>Books</h1>
                        {sorted_books.map((book,key) =>(
                            <div key={key}>
                                <h2 id="book-title">{book.data.title}</h2>
                                <p id="book-author">{book.data.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="blogs">

                <div className="row">
                    <div className="col">
                        <h1>Video Games</h1>
                        {sorted_games.map((games,key) =>(
                            <div key={key}>
                                <h2 id="book-title">{games.data.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="blogs">
                <div className="row">
                    <div className="col">
                        <h1>Albums</h1>
                        {sorted_albums.map((album,key) =>(
                            <div key={key}>
                                <h2 id="book-title">{album.data.title}</h2>
                                <p id="book-author">{album.data.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}