const collectData = require('../../middleware/collect-data');
const validationPermission = require('../validation/validation-permission');
const constants = require('../../v1/admin-panel/common/constants');

const dispatcher = (ControllerClass, controllerMethodName) => async (request, response, next) => {
  request.data = collectData(request);
  request.token = request.headers.authorization || null;

  try {
    const { permissionRules } = ControllerClass.validationRules;
    if (permissionRules[controllerMethodName]) {
      const result = validationPermission(permissionRules[controllerMethodName], request);
      if (!result) {
        return await response.redirect(constants.LOGIN_URL);
      }
    }

    const controller = new ControllerClass();

    return await controller[controllerMethodName](request, response, next);
  } catch (error) {
    return next(error);
  }
};

module.exports = dispatcher;
