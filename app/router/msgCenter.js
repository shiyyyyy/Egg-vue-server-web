/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const msgCenter = router.namespace('/msgCenter');
  msgCenter.get('/msgCenter', controller.msgCenter.msgCenter.index);
};
