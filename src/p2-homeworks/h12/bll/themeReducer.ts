export type themeType = 'some' | 'red' | 'dark' | 'blue' | 'pink'

export type initialThemeStateType = {
    theme: themeType
}

const initState: initialThemeStateType = {
    theme: 'some'
};

export const themeReducer = (state = initState, action: ActionChangeTheme): initialThemeStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            let copyState = {...state}
            copyState.theme = action.theme
            return copyState;
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: themeType): {type: 'CHANGE-THEME', theme: themeType} => {
    return {
        type: 'CHANGE-THEME',
        theme: theme
    }
}
type changeThemeCReturnType = ReturnType<typeof changeThemeC>
type ActionChangeTheme = changeThemeCReturnType


// fix any