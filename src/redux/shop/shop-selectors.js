import {
    createSelector
} from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1,
    jackets: 2,
    sneakers: 3,
    womens: 4,
    mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections =>
        // find collection.id matching the url parameter of the collection id map
        collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    );