import React from 'react';

import CollectionItem from "../../Components/CollectionItem";

import "./styles.scss";

const CollectionPage = ({ match }) => {
    console.log(match.params.collectionId)
    return (
        <div className="collection-page">
            <h2>Category page</h2>
        </div>
    );
};

export default CollectionPage;