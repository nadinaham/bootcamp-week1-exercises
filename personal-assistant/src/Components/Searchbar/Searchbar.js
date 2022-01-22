import React from 'react'

function Searchbar({handleSearch}) {
    return (
        <input onChange={(e) => handleSearch(e.target.value)} sx={{
                                borderRadius: '20px',
                                backgroundColor: 'gray6',
                                height: '60px',
                                border: 'none',
                                paddingLeft:'1em',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '24px',
                    width:'100%'}} placeholder='Search'/> 
    )
}

export default Searchbar