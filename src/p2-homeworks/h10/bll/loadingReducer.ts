const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: loadingACReturnType): { isLoading: boolean } => { // fix any
    switch (action.type) {
        case 'changeIsLoading': {
            let copyState = {...state}
            copyState.isLoading = action.isLoading
            return copyState
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'changeIsLoading',
        isLoading: isLoading
    }
} // fix any


export type loadingACReturnType = ReturnType<typeof loadingAC>