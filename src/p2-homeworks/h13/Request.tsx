import React, {useEffect, useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestAPI";

function Request() {

    let [checkboxValue, setCheckboxValue] = useState<boolean>(false)

    let [tt, setTt] = useState<boolean>(false)

    let [resp, setResp] = useState<string | null>(null)

    let clickButton = () => setTt(checkboxValue)


    useEffect(() => {
        RequestAPI.checkboxGet(tt)
            .then((res) => {
                console.log(res.data.errorText)
                setResp(res.data.errorText)
            })
            .catch((error) => {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message)
                setResp('ошибка (имитация)')
            })

    }, [tt])


    return (
        <div>
            <SuperButton onClick={clickButton}>Запрос</SuperButton>
            <SuperCheckbox
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.currentTarget.checked)}
            />
            <div>{resp}</div>
        </div>
    )


}

export default Request;

