import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'

export const Header = () => {
    const {tg, user, closeBtn} = useTelegram()

  return (
    <div className={'header'}>
        <button onClick={closeBtn}>Закрыть</button>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>
  )
}
