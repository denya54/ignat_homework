import React from 'react'
import {checkAC, homeWorkReducer, sortAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType>  // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState: Array<UserType> = homeWorkReducer(initialState, sortAC('up'))
    console.log(newState)
    expect(newState).toStrictEqual([
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 0, name: 'Кот', age: 3},
    ])
})
test('sort name down', () => {
    const newState:  Array<UserType>  = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    expect(newState).toStrictEqual([
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 1, name: 'Александр', age: 66},
    ])
})
test('check age 18', () => {
    const newState: Array<UserType> = homeWorkReducer(initialState, checkAC(18))
    expect(newState.length).toBe(4)
})
