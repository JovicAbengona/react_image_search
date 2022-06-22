import React from 'react';

const SearchForm = (props) => {
    return <div className="ui segment">
        <div className="ui form">
            <div className="field">
                <form onSubmit={props.onSubmit}>
                    <label htmlFor="image_search_text">Image Search</label>
                    <input type="text" id="image_search_text" name="image_search_text" onChange={props.onChange} autoFocus />
                </form>
            </div>
        </div>
    </div>
};

export default SearchForm;