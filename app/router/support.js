/**
 * Created by js  2019/11/06
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const support = router.namespace('/support');
  support.get('/support', controller.support.support.supportShow);
};
