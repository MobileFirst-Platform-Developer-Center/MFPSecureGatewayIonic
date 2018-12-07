
const { InvocationContext } = require('../baseService');
const { Interceptor } = require('../baseService');
const util = require('util');

const PathHandler = function () {
  Interceptor.apply(this, Array.prototype.slice.call(arguments));
};

util.inherits(PathHandler, Interceptor);

function substitutePathURL(pathParams, targeturl) {
  if (!pathParams) return targeturl;
  if (pathParams.length <= 0) return targeturl;

  const paramLength = pathParams.length;

  pathParams.forEach((path, idx) => {
    targeturl = targeturl.replace(`{${path.name}}`, path.value);
  });

  return targeturl;
}

PathHandler.prototype.request = function (context, next) {
  try {
    let targeturl = substitutePathURL(context.operation.params, context.operation.datasetInfo.path);

    let baseUrl = context.operation.baseurl;
    if (baseUrl.charAt(baseUrl.length - 1) === '/' && targeturl.charAt(0) === '/') {
      targeturl = targeturl.substring(1);
    }
    context.endpoint.url = baseUrl + targeturl + context.operation.queryurl;
  } catch (err) {
    console.error('PathHandler', 'request', 'Error:', err);
    err.status_code = 400;
    context.payload = err;
    context.interactionType = InvocationContext.INTERACTION_FAULT_TYPE;
  } finally {
    next();
  }
};

module.exports = PathHandler;
