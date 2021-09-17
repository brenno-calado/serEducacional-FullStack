const routes = require('express').Router();
const rescue = require('express-rescue');
const { login } = require('./controllers/login');
const user = require('./controllers/user');
const contact = require('./controllers/contact');

routes.post('/login', rescue(login));

routes.post('/user', rescue(user.create));
routes.get('/user', rescue(user.getContacts));

routes.post('/contact', rescue(contact.create));
routes.put('/contact/:id', rescue(contact.updateStatus));
routes.delete('/contact/:id', rescue(contact.deleteOne));

module.exports = routes;
