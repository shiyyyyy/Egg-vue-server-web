/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const helpCenter = router.namespace('/helpCenter');
  helpCenter.get('/helpCenter', controller.helpCenter.helpCenter.index);
  helpCenter.get('/plateList', controller.helpCenter.helpCenter.plateList);
  helpCenter.get('/qaDetails', controller.helpCenter.helpCenter.qaDetails);
  helpCenter.get('/serviceTel', controller.helpCenter.helpCenter.serviceTel);
  helpCenter.get('/helpDetail', controller.helpCenter.helpCenter.helpDetail);
};
