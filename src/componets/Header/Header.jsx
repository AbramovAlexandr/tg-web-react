import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'
import './Header.css'

export const Header = () => {
    const {user, onClose} = useTelegram()

  return (
    <div className={'header'}>
        <button onClick={onClose} className={'btn-header'}>Закрыть</button>
        <span className={'username'}>
          {user?.username} 
        </span>
    </div>
  )
}
