import React from 'react'

export const Header = () => {
    const tg = window.Telegram.WebApp;

    const closeBtn = () =>{
        tg.close()
      }

  return (
    <div className={'header'}>
        <button onClick={closeBtn}>Закрыть</button>
        <span className={'username'}>
            {tg.initDataUnSafe?.user?.user}
        </span>
    </div>
  )
}
