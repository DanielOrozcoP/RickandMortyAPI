import PropTypes from "prop-types";

export const CardListItem = ({card, setModalCard}) => {

    const handleSetModalCard = () => {
        setModalCard(card)
    }

    return (
        <>
            <div className='card rounded shadow p-3 mb-5 bg-body-tertiary rounded animate__animated animate__fadeIn'>
                <img src={card.img} alt="..." className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{card.name}</h5>
                    <button type="button" className="btn btn-primary btn-block w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={handleSetModalCard}
                    >
                        Detalles
                    </button>
                </div>
            </div>
        </>
    )
}

CardListItem.propTypes = {
    card: PropTypes.object.isRequired,
    setModalCard: PropTypes.func.isRequired
}