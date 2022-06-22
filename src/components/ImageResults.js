import React from 'react';

const ImageResults = (props) => {
    let result = [];

    if(props.images != null){
        if(props.images.length > 0){
            for(var index=0; index < props.images.length; index++){
                result.push(<img key={props.images[index].id} className="ui massive rounded image" alt={props.images[index].alt_description} src={props.images[index].urls.regular}></img>);
            }
        }
        else{
            result.push(<h4 className="ui grey header">No results</h4>);
        }
    }

    return result;
};

export default ImageResults;