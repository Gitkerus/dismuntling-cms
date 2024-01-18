"use strict";

/**
 * `services-data` middleware
 */

const populate = {
  allServices: {
    populate: {
      Img: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
      TextBlocks: {
        populate: {
          Img: {
            populate: true,
            fields: ["name", "alternativeText", "url"],
          },
        },
      },
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In services-data middleware.");
    ctx.query = {
      populate,
      ...ctx.query,
    };
    await next();
  };
};
