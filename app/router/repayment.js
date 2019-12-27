/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const repayment = router.namespace('/repayment');

  repayment.get('/repaymentHelpPage', controller.repayment.repayment.repaymentHelpPage);
  repayment.get('/repaymentHelp', controller.repayment.repayment.repaymentHelp);
  repayment.get('/repaymentType', controller.repayment.repayment.repaymentType);
};
