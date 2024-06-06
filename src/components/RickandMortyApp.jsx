import {useFetchApi} from '../hooks/useFetchApi'
import {CardList} from "./CardList.jsx";
import {useState} from "react";
import {PaginationRaM} from "./PaginationRaM.jsx";
import { ModalRaM } from './ModalRaM.jsx';

export const RickandMortyApp = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const {data: cards} = useFetchApi(currentPage)
    const [modalCard, setModalCard] = useState('')

    
    const handleNext = () => {
        if (currentPage >= 42) {
            setCurrentPage(42)
        }else{
            setCurrentPage(currentPage + 1)
        }
        
    }

    const handlePrevious = () => {
        if (currentPage <= 1) {
            setCurrentPage(1)
        }else{
            setCurrentPage(currentPage - 1)
        }
        
    }    
    return (
        <>
            <h3>RickandMortyApp</h3>
            <hr/>
            <PaginationRaM
                currentPage={currentPage}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
            />
            <div className="container mt-5">
                <div className='row row-cols-4 '>
                    <CardList
                        setModalCard={setModalCard}
                        cards={cards}
                    />
                </div>
            </div>
            <ModalRaM modalCard={modalCard}/>
        </>
    )
}




