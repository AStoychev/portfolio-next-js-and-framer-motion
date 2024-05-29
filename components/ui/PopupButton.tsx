import React from 'react'

const PopupButton = ({ handleClosePopup }: { handleClosePopup: () => void }) => {
    return (
        <div className="flex items-center justify-center pt-3" onClick={handleClosePopup}>
            <button className="px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-800">
                Close
            </button>
        </div>
    )
}

export default PopupButton