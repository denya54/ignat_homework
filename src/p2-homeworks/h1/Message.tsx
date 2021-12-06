import React from 'react'
import styles from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.background}>
            <img src={props.avatar} className={styles.img}/>

            <div className={styles.corner}></div>

            <div className={styles.content}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.message}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
