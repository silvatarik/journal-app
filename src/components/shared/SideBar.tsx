import React from 'react'
import { Entries } from '../entries/Entries'

export const SideBar = () => {
    return (
        <div className="flex flex-col h-full overflow-auto w-96 items-center text-center bg-teal-900 text-gray-400 border-r">
            <span className="my-3 text-3xl"> Journal App </span>
            <ul className="menu px-3 shadow-lg bg-base-100 rounded-box horizontal">
                <li>
                    <a>
                        <i className="fas fa-plus"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fas fa-trash-alt"></i>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </li>
            </ul>

            <Entries/>

        </div>
    )
}
