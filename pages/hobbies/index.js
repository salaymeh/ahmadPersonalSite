import Header from "../../components/Header"
import { useContext } from "react"
import { Context } from "../../context/Context"


export default function Hobbies(){
    const{ books, games, albums} = useContext(Context)

    return(
        <>
        <Header></Header>

        <div className="container">
            <div className="blogs">
                <div className='row'>
                    <div className="col">
                        <h1>Books</h1>
                        {books.map((book,key) =>(
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
                        {games.map((game,key) =>(
                            <div key={key}>
                                <h2 id="book-title">{game.data.title}</h2>
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
                        {albums.map((album,key) =>(
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