export const getCard = async (page) => {

    const url = `https://rickandmortyapi.com/api/character?page=${page}`
    const resp = await fetch(url)
    const {results} = await resp.json()

    return results.map(card => {
        return {
            id: card.id,
            img: card.image,
            name: card.name,
            status: card.status,
            species: card.species,
            type: card.type,
            gender: card.gender,
            origin: card.origin.name,
            location: card.location.name,
            episode: card.episode
        }
    })
}