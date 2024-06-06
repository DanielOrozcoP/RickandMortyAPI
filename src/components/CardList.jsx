import {CardListItem} from "./CardListItem.jsx";
import PropTypes from 'prop-types'

export const CardList = ({cards, setModalCard}) => {
    return (
        <>
            {
                cards.map(card => {
                    return (
                        <div key={card.id} className='col-md-3 mb-4 miHover'>
                            <CardListItem
                                setModalCard={setModalCard}
                                card={card}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}
CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired,
    setModalCard: PropTypes.func.isRequired
}