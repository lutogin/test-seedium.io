const express = require('express');
const dispatcher = require('./dispatcher');

class Router {
  constructor(ControllerClass) {
    this.ControllerClass = ControllerClass;
    this.router = express.Router();

    this.get = (path, controllerMethod) => ({ method: 'get', path, controllerMethod });
    this.post = (path, controllerMethod) => ({ method: 'post', path, controllerMethod });
    this.put = (path, controllerMethod) => ({ method: 'put', path, controllerMethod });
    this.delete = (path, controllerMethod) => ({ method: 'delete', path, controllerMethod });
    this.all = (path, controllerMethod) => ({ method: 'all', path, controllerMethod });
  }

  addRoutes(routes) {
    routes.forEach(async route => {
      const { method, path, controllerMethod } = route;
      this.router[method](path, dispatcher(this.ControllerClass, controllerMethod.name));
    });

    return this.router;
  }
}

module.exports = Router;
