import React, {useState} from "react";
import {InputAdornment, makeStyles, TextField} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {Link, useParams} from "react-router-dom";

const useSearchStyles = makeStyles(theme => ({
    wbdvSearchInputField: {
        backgroundColor: "white",
        borderRadius: theme.shape.borderRadius,
        borderColor: "orange",
        maxWidth: 500
    }
}))

const SearchBar = ({searchRecipes, initialSearchQuery}) => {
    const styleClasses = useSearchStyles();

    const [searchQuery, setSearchQuery] = useState(initialSearchQuery)

    // const {searchQueryParam} = useParams()
    //
    // const keyPress = (event) => {
    //     if (event.keyCode === 13) {
    //         searchRecipes(searchQuery);
    //         setSearchQuery("");
    //     }
    // }

    return <TextField
        InputProps={{
            endAdornment: (
                <Link to={`/search/${searchQuery}`}>
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                </Link>
            ),
            className: styleClasses.wbdvSearchInputField
        }}
        onChange={event => {
            setSearchQuery(event.target.value)
        }}
        // onKeyDown={event => {
        //     keyPress(event)
        // }}
        id="search-recipe"
        type="text"
        value={searchQuery}
        fullWidth={true}
        placeholder="Search recipe"
        variant="outlined"/>
}

export default SearchBar