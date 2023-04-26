'use strict';

/**
 * exfoliant service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exfoliant.exfoliant');
