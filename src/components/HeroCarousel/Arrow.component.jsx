import React from 'react';

export const Nextarrow = (props) => {
    return (
    <>
    <div 
    className={props.className}
    style={{...props.style, backgroundColor:"black"}}
    onclick={props.onClick}
     />
    </>
    )
}

export const Prevarrow = (props) => {
    return (
    <>
    <div 
    className={props.className}
    style={{...props.style}}
    onclick={props.onClick}
     />
    </>
    )
}