import React from 'react'

interface AddCardButtonProps{
    click: any
}


export const AddCardButton : React.FC<AddCardButtonProps> = ({click}) => {

    
    return <>
        <button onClick = {click}>Добавить карточку</button>
    </>

}