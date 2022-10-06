import React, { useCallback, useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

export const Form = () => {

    const [country, setcountry] = useState();
    const [street, setstreet] = useState();
    const [subject, setsubject] = useState('physic');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject,
        }
        tg.sendData(JSON.stringify(data))
    }, [])

    useEffect(()=>{
        tg.onEvent( 'mainButtonClicked', callback)
        return () => {
            tg.offEvent( 'mainButtonClicked', callback)

        }
    }, [])

    useEffect( ()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect( ()=>{
        if(!street || !country){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }, [street, country])

    const onChangeCountry = (e) =>{
        setcountry(e.target.value)
    }
    const onChangeStreet = (e) =>{
        setstreet(e.target.value)
    }
    const onChangeSubject = (e) =>{
        setsubject (e.target.value)
    }

  return (
    <div className={'form'}>
        <h3>Введите ваши данные</h3>
        <input className={'input'} value={country} onChange={onChangeCountry} type="text" placeholder={'Страна'}/>
        <input className={'input'} value={street} onChange={onChangeStreet} type='text' placeholder={'Улица'}/>

        <select className={'select'} value={subject} onChange={onChangeSubject}>
            <option value={'legal'}>Юр.лицо</option>
            <option value={'physic'}>Физ.лицо</option>
        </select>
    </div>
  )
}
