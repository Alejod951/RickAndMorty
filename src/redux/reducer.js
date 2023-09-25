const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_FAV':
            let copy1 = state.myFavorites
            copy1.push(payload)
            return {
                ...state,
                myFavorites: copy1,
                allCharacters: copy1
            }

        case 'REMOVE_FAV':
            let copy2 = state.myFavorites.filter((char) => char.id !== Number(payload))
            return {
                ...state,
                myFavorites: copy2
            }

        case 'FILTER':
            let copy3 = state.allCharacters
            const filter = copy3.filter((character) => character.gender === payload);
            state.myFavorites = filter;
            return {
                ...state,
                allCharacters: copy3
            }

        case 'ORDER':
            let copy4 = state.allCharacters
            let order = payload
            copy4.sort((a, b) => {
                if (order === "A") {
                  return a.id - b.id;
                } else {
                  return b.id - a.id;
                }
              });

            return {
                ...state,
                myFavorites: copy4
            }
        default:
            return state
    }
}
export default rootReducer