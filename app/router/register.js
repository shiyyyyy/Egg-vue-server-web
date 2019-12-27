/**
 * Created by yxjon  2019/8/16
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const register = router.namespace('/register');
  register.get('/register', controller.register.register.register);
  register.post('/getCode', controller.register.register.getCode);
  register.post('/registerUser', controller.register.register.registerUser);
};
