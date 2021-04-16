import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { decrement, increment } from '../store/slices/counterSlice'

export const Test : React.FC = () =>{

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    const Test = () => {
        
    }



    return <>
        {count} erfre
        <button onClick = {() => dispatch(decrement())}>fewrfre</button>
    </>

}