const halson = require('halson');

const buildHalResourceResponse = (resource, linkSelf) => halson(resource).addLink('self', linkSelf);

const buildHalResourceCollectionResponse = (
    resource,
    collectionName,
    collection,
    linkSelf,
) => halson(resource).addLink('self', linkSelf).addEmbed(collectionName, collection);

const buildHalResourceCollectionWithPagination = (resource, collectionName, collection, links) => halson(resource)
    .addLink('self', links.selfLink)
    .addLink('next', links.nextLink)
    .addEmbed(collectionName, collection);

const sendResponse = (res, contentType, statusCode, payload) => {
    if (!res.headerSent) {
        res.set('Content-Type', contentType)
            .status(statusCode)
            .send(payload);
    }
};

module.exports = {
    sendResponse,
    buildHalResourceResponse,
    buildHalResourceCollectionResponse,
    buildHalResourceCollectionWithPagination,
};
