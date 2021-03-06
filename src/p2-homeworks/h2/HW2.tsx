import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
   if (filter === 'low') {
       const filteredAffairs = affairs.filter(aff => aff.priority === 'low')
       return filteredAffairs
   }
   else if (filter === 'middle') {
       const filteredAffairs = affairs.filter(aff => aff.priority === 'middle')
       return filteredAffairs
   }
   else if (filter === 'high') {
       const filteredAffairs = affairs.filter(aff => aff.priority === 'high')
       return filteredAffairs
   }
    else {
        return affairs
    }
}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    const newAffairs = affairs.filter(aff => aff._id !== _id)
    return newAffairs
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[] >(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
