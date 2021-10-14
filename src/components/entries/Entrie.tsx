import React from 'react'

export const Entrie = () => {
    return (
        <article tabIndex={0} className="cursor-pointer border rounded-md p-3 bg-white flex text-gray-700 mb-2 hover:border-green-500 focus:outline-none focus:border-green-500">
             <img className="h-20 w-10 -ml-2 rounded-md" src="https://picsum.photos/seed/picsum/200/300" />
            <div className="flex-1">
                <header className="mb-1">
                    Titulo 1
                </header>
                <p className="text-gray-600 truncate pl-1">
                    Hi Mazhar, Please note this issue comes when user is not
                    closing or logout sy…
                </p>
                <footer className="text-gray-500 mt-2 text-sm">
                    Friday 22:16
                </footer>
            </div>
        </article>
    )
}
