/*
 * Title: Sample Handler
 * Description:
 * Author: MD Arif Islam
 * Date: 12 Nov 2022
 */

const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
