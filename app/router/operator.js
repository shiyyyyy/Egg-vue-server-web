/**
 * Created by qianggao on  2019/3/10
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const operator = router.namespace('/operator');

  operator.get('/forgetPass', controller.operator.operator.forgetPass);
};
