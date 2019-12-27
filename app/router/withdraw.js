/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const repayment = router.namespace('/withdraw');

  repayment.get('/result', controller.withdraw.index.result);
};
