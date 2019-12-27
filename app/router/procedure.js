/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const procedure = router.namespace('/procedure');
  procedure.get('/procedure', controller.procedure.index.index);
};
