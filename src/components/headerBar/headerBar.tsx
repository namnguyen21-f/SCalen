import { type } from 'os';
import React,{FC, ReactElement} from 'react';

type NavigatorItem = {
    logo: string,
    title: string,
}

type Props = {
    logo: string,
    navigator: Array<NavigatorItem>,
}

export const HeaderBar:FC<Props> = ({logo,navigator}) =>{
    return (
        <div className="container-fluid">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="navBar">
                {navigator.map((ele) =>{
                    return (
                        <button></button>
                    )
                })}
            </div>
        </div>
      )
}