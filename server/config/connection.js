const { connect, connection } = require('mongoose');

connect('mongodb://localhost/manaforge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
