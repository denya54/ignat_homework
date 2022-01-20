import React, {useState} from 'react'
import {SuperRange2} from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange2} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(100)

    const changeValue1 = (value: number) => setValue1(value)
    const changeValue2 = (value: number) => setValue2(value)


    // let func = (value: [number, number]) => {
    //     setValue1(value[0])
    //     setValue2(value[1])
    // }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>

                <SuperRange2
                  value={value1}
                  onChangeRange={setValue1}
                />


                {/*<SuperRange*/}
                {/*    onChangeRange={setValue1}*/}
                {/*    // сделать так чтоб value1 изменялось*/}
                {/*/>*/}
            </div>

            <div>
                <span>{value1}</span>
                {/*<SuperDoubleRange*/}
                {/*    onChangeRange={func}*/}
                {/*    value={[value1, value2]}*/}

                {/*    // сделать так чтоб value1 и value2 изменялось*/}
                {/*/>*/}
                {/*<span>{value2}</span>*/}

                <SuperDoubleRange2
                value1={value1}
                onChangeRange1={changeValue1}
                value2={value2}
                onChangeRange2={changeValue2}
                />
                <span>{value2}</span>

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
