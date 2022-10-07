import { collection, getDocs,setDoc, doc, getDoc} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";


export const Context = createContext();

export const ContextProvider = ({children}) =>{

    const [projects, setProjects]= useState([])
    const [inProgress, setInProgress] = useState([])
    const [ideas, setIdeas] = useState([])
    const [books,setBooks] = useState([])
    const [games, setGames] = useState([])
    const [albums,setAlbums] = useState([])

    useEffect(() => {
        const getProjects = async () => {
            const querySnapshot = await getDocs(collection(db, 'finishedProjects'))

            setProjects(
                querySnapshot.docs.map(doc => {
                return {

                    id: doc.id,
                    data: {
                        description: doc.data().description,
                        link: doc.data().link,
                        technology: doc.data().technology,
                        title: doc.data().title,
                    },
                }
            }),
            )
        }
        getProjects()
    },[])

    useEffect(() =>{
        const getInProgress = async () => {
            const querySnapshot = await getDocs(collection(db,'inProgress'))

            setInProgress(
                querySnapshot.docs.map(doc =>{
                    return{
                        id: doc.id,
                        data: {
                            description: doc.data().description,
                            link: doc.data().link,
                            technology: doc.data().technology,
                            title: doc.data().title,
                        },
                    }
                }),
            )
        }
        getInProgress()
    },[])

    useEffect(() =>{
        const getIdeas = async () => {
            const querySnapshot = await getDocs(collection(db,'projectIdeas'))

            setIdeas(
                querySnapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        data: {
                            title: doc.data().title,
                        },
                    }
                }),
            )
        }
        getIdeas()
    },[])

    useEffect(()=>{
        const getBooks = async()=>{
            const querySnapshot = await getDocs(collection(db,'books'))

            setBooks(
                querySnapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        data: {
                            title: doc.data().title,
                            author: doc.data().author,
                        },
                    }
                }),
            )
        }
        getBooks()
    },[])

    useEffect(()=>{
        const getGames = async()=>{
            const querySnapshot = await getDocs(collection(db,'videoGames'))

            setGames(
                querySnapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        data: {
                            title: doc.data().title,
                        },
                    }
                }),
            )
        }
        getGames()
    },[])

    useEffect(()=>{
        const getAlbums = async()=>{
            const querySnapshot = await getDocs(collection(db,'music'))

            setAlbums(
                querySnapshot.docs.map(doc => {
                    return{
                        id: doc.id,
                        data: {
                            title: doc.data().title,
                            author: doc.data().author
                        },
                    }
                }),
            )
        }
        getAlbums()
    },[])


    return(
        <Context.Provider value={{projects, inProgress, ideas, books, games, albums}}>
            {children}
        </Context.Provider>
    )
}
