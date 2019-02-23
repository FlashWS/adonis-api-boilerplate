"use strict"

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/
/*global use*/
/** @import {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route")

Route.on("/").render("welcome")

Route.group(() => {
  Route.post("oauth/token", "AuthController.login")
  Route.post("register", "AuthController.register")
})
  .prefix("/api")
  .middleware("guest")

Route.group(() => {
  Route.resource("/:resource", "ResourceController")
})
  .prefix("/api")
  .middleware(["resource", "auth"])
