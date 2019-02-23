# Adonis REST API application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication JWT
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Resource controller
10. ESLint
11. Prettier
11. JSDoc
12. Swagger

## Setup

Clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Start application
`adonis serve --dev`

### API Documentation

http://127.0.0.1:3555/api-docs/

### Test API in .http on JetBrains or VScode

``` http request
###
POST {{host}}/register
Content-Type: application/json
Accept: application/json

{
  "username": "test",
  "email": "test@test.com",
  "password": "test"
}
###
POST {{host}}/oauth/token
Content-Type: application/json
Accept: application/json

{
  "email": "test@test.com",
  "password": "test"
}

> {% client.global.set("auth_token", response.body.token); %}

###
GET {{host}}/users
Content-Type: application/json
Accept: application/json
Authorization: Bearer {{auth_token}}
###
```
