import React, {ChangeEvent, useEffect} from 'react'
import {Box, Slider} from "@material-ui/core";

// type SuperDoubleRangePropsType = {
//     onChangeRange?: (value: [number, number]) => void
//     value?: [number, number]
//     // min, max, step, disable, ...
// }
//
// const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
//     {
//         onChangeRange, value,
//         // min, max, step, disable, ...
//     }
// ) => {
//     // сделать самому, можно подключать библиотеки
//
//     const [valueS, setValueS] = React.useState<number[]>([50, 100]);
//     const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
//         setValueS(newValue as number[]);
//     };
//
//     return (
//         <>
//
//             DoubleRange
//             <Slider
//                 getAriaLabel={() => 'Temperature range'}
//                 value={value}
//                 onChange={handleChange}
//                 valueLabelDisplay='auto'
//             />
//
//         </>
//     )
// }
//
// export default SuperDoubleRange

type SuperDoubleRange2PropsType = {
    value1: number
    onChangeRange1: (value1: number) => void
    value2: number
    onChangeRange2: (value2: number) => void
}

export const SuperDoubleRange2 = (props: SuperDoubleRange2PropsType) => {

    const [valueS, setValueS] = React.useState<number[]>([props.value1, props.value2]);
    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        setValueS(newValue as number[]);
        props.onChangeRange1(valueS[0])
        props.onChangeRange2(valueS[1])
    };
    return (
        <Box width={300}>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={[props.value1, props.value2]}
            onChange={handleChange}
            valueLabelDisplay='auto'
        />
        </Box>

    )

}