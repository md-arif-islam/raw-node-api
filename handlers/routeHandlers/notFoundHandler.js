/*
 * Title: Not  Handler
 * Description:
 * Author: MD Arif Islam
 * Date: 12 Nov 2022
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found!",
  });
};

module.exports = handler;
