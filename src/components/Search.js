import React, {usestate} from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = usestate("")

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputFirld = () =>{
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputFirld()
    }
    return (
        <form className="search">
            <input value={searchValue} onChange={handleSearchInputChanges} type="text"></input>
            <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
    )
}