import React from 'react'

const Announcement = (props) => {
    const { title, content } = props
    return (
        <div className='flex flex-row bg-amber-300 rounded-xl p-2 gap-2'>
            <div className='flex flex-col gap-2'>
                <button 
                    className='admin-button bg-blue-500 border-blue-500 hover:border-blue-800'
                >
                    Upravit
                </button>
                <button 
                    className='admin-button bg-red-500 border-red-500 hover:border-red-800'
                >
                    Smazat
                </button>
            </div>
            <div>
                <div>{title}</div>
                <div>{content}</div>
            </div>
        </div>
    )
}

export default Announcement