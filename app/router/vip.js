/**
 * Created by yxjon  2019/8/16
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const download = router.namespace('/vip');
  download.get('/vipdetail', controller.vip.vip.vipdetail);
  download.post('/valueAddedService', controller.vip.vip.valueAddedService);
  download.post('/changeValueAddedService', controller.vip.vip.changeValueAddedService);
};
