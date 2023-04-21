'use strict';

const indexRouter = require('./routers/index.router');
const eventosRouter = require('./routers/eventos.router');
const app = require('./init.app');

// Router
app.use('/', indexRouter);
app.use('/eventos', eventosRouter);

module.exports = app;