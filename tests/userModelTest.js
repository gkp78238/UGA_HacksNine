
const mongoose = require('mongoose');
const chai = require('chai');
const expect = chai.expect;

const User = require('../models/userSchema');


before((done) => {
  mongoose.connect(process.env.TEST_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error'));
  db.once('open', function() {
    console.log('We are connected to test database!');
    done();
  });
});

describe('User Model Test', () => {

  it('creates a user', (done) => {
    const user = new User({
      email: 'test@example.com',
      password: 'password',
      role: 'admin'
    });

    user.save((err, user) => {
      expect(err).to.be.null;
      expect(user).to.have.property('email', 'test@example.com');
      expect(user).to.have.property('role', 'admin');
      expect(user.password).to.not.equal('password');
      done();
    });
  });

  // Cleanup after tests
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
