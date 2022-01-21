import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, themeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'blue', 'pink'];

function HW12() {
    let theme = useSelector<AppStoreType, themeType>((state) => state.theme.theme)
    let dispatch = useDispatch()

    let onChangeCallback = (theme: themeType) => {
        dispatch(changeThemeC(theme))
    }


    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
                <SuperSelect
                    value={theme}
                    options={themes}
                    onChangeOption={onChangeCallback}
                />


                {/*<SuperRadio/>*/}
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
