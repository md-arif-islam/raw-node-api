/*
 * Title: Routes
 * Description: Manage Routes
 * Author: MD Arif Islam
 * Date: 12 Nov 2022
 */

// Dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
