import React from "react";
import { Route } from "react-router-dom";


import CollectionsOverview from "../../Components/CollectiosOverview";
import CollectionPage from "../CollectionPage";


const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}/>
    <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
