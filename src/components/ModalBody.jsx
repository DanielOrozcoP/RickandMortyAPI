import PropTypes from "prop-types";

export const ModalBody = ({modalCard}) => {
    return (
        <>
            <div className="modal-body">
                <div className="container">
                    <div className="d-inline-flex align-items-center">
                        <img className='rounded-circle w-25 ' src={modalCard.img} alt="..."/>
                        <h1 className="m-3">{modalCard.name}</h1>
                    </div>
                    <hr/>
                    <div>
                        <p>Estado: {modalCard.status}</p>
                        <p>Especie: {modalCard.species}</p>
                        <p>Tipo: {modalCard.type}</p>
                        <p>Genero: {modalCard.gender}</p>
                        <p>Origen: {modalCard.origin}</p>
                        <p>Locacion: {modalCard.location}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
ModalBody.propTypes = {
    modalCard: PropTypes.string.isRequired
}