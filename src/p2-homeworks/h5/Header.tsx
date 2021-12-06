import React from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./RoutesComponent";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.activeLink}>PRE Junior </NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.activeLink}>Junior </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.activeLink}>Junior PLUS </NavLink>
            <div className={s.block}></div>

        </div>
    )
}

export default Header
