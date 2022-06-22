import React from "react";
import ReactDOM from "react-dom"
import SearchForm from "./components/SearchForm"
import ImageResults from "./components/ImageResults"
import { createApi } from "unsplash-js"

const api = createApi({
    // Don't forget to set your access token here!
    // See https://unsplash.com/developers
    accessKey: ""
  });
  
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search_text: "",
            images: null 
        }
    }

    getImages = async (search_text) => {
        api.search
        .getPhotos({ query: search_text, orientation: "landscape", per_page: 30 })
        .then(result => {
            this.setState({ images: result.response.results });
        })
        .catch(() => {
            console.log("something went wrong!");
        });
    }

    onSubmit = async (event) => {
        event.preventDefault();

        let {search_text} = this.state

        if(search_text){
            await this.getImages(search_text);
        }
    }

    onChange = async (event) => {
        event.preventDefault();
        
        this.setState({ search_text: event.target.value.trim() })
    }

    render() {
        return (
            <>
                <SearchForm onSubmit={this.onSubmit} onChange={this.onChange} />
                <div className="ui medium images">
                    <ImageResults images={this.state.images} />
                </div>
            </>
        );
    };
};

ReactDOM.render(<App/>, document.querySelector("#root"));