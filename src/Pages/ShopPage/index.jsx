import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../Components/CollectiosOverview";
import CollectionPage from "../CollectionPage";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/utils";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot)
    })
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default ShopPage;
