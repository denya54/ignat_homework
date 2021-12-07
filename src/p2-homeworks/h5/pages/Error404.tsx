import React from 'react'
import s from './Error404.module.css'
import picture from './kr0o1h5.jpg'

function Error404() {
    return (
        <div className={s.error}>
            Attention
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <img src={picture}/>
        </div>
    )
}

export default Error404
