'use strict';

const Hash = use('Hash');

const UserHook = exports = module.exports = {};

UserHook.hashPassword = async (user) => {
  user.password = Hash.make(user.password);
}
