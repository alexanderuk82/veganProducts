'use strict';

/**
 * facial service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::facial.facial');
