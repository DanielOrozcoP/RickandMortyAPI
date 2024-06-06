import PropTypes from "prop-types";

export const PaginationRaM = ({handleNext, handlePrevious, currentPage}) => {


    return (
        <div className="container d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button onClick={handlePrevious} className="page-link bg-body-secondary">Anterior</button>
                    </li>
                    <li className="page-item"><a className="page-link">{currentPage}</a></li>
                    <li className="page-item">
                        <button onClick={handleNext} className="page-link bg-body-secondary">Siguiente</button>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

PaginationRaM.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handlePrevious: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}