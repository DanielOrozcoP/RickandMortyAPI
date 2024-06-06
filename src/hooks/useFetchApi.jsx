import {useEffect, useState} from "react"
import {getCard} from "../helpers/getCard"

export const useFetchApi = (page) => {
    const [state, setState] = useState({
        data: []
    })

    useEffect(() => {
        getCard(page)
            .then(cards => {
                setState({
                    data: cards
                })
            })
    }, [page])
    return state // {data: []}
}

