/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const repayment = router.namespace('/signing');

  repayment.get('/signing', controller.signing.signing.signingType);
};
