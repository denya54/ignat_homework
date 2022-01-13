import {UserType} from "../HW8";


const sortUpper = (a: UserType, b: UserType) => {
    if (a.name > b.name) return 1
    else if (a.name < b.name) return -1
    else return 0
}

const sortDowner = (a: UserType, b: UserType) => {
    if (a.name > b.name) return -1
    else if (a.name < b.name) return 1
    else return 0
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]
            if (action.payload === 'up') {
              return copyState.sort(sortUpper)
            } if (action.payload === 'down') {
                return copyState.sort(sortDowner)
            }
            return state
        }
        case 'check': {
            let copyState = [...state]
            return copyState.filter(us => us.age > action.payload)
        }
        default: return state
    }
}

export const checkAC = (payload: number) => {
    return {
        type: 'check' as const,
        payload
    }
}

export const sortAC = (payload: 'up' | 'down') => {
    return {
        type: 'sort' as const,
        payload
    }
}

type checkACReturnType = ReturnType<typeof checkAC>
type sortACReturnType = ReturnType<typeof sortAC>

type ActionType = checkACReturnType | sortACReturnType