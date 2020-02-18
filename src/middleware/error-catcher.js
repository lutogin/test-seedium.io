import HTTP_STATUS from 'http-status-codes';

function errorCatcher(error, request, response, next) {
  if (response.headersSent) {
    return next(error);
  }
  if (error) {
    return response.status(HTTP_STATUS.BAD_REQUEST).send(error.message || error);
  }
  return next();
}

export default errorCatcher;
