export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload],
            };
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return { //payloaddan gönderdiğim id movie.id ye eşit değilse at diğerlerini göster.filtreleme işlemi
                ...state,
                watchlist: state.watchlist.filter((movie) => movie.id !== action.payload
                ),
            };
        case "ADD_MOVIE_TO_WATCHED"   :
            return{
                ...state,
                watchlist:state.watchlist.filter((movie) =>movie.id !== action.payload.id),
                watched:[...state.watched,action.payload],
            } ;
        default:
            return state
    }
};