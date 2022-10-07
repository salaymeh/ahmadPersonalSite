import Header from "../../components/Header"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function blog(){
    return(
        <>
        <Header></Header>
        <div className="blogs">
            <h1>....When something special happpens I will let you know....</h1>
        </div>
        </>
    )
}