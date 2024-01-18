"use strict";

/**
 * uslugi router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::uslugi.uslugi", {
  config: {
    find: {
      middlewares: ["api::uslugi.services-data"],
    },
    findOne: {
      middlewares: ["api::uslugi.services-data"],
    },
  },
});
