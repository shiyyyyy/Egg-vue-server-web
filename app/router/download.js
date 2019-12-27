/**
 * Created by yxjon  2019/8/16
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const download = router.namespace('/download');
  download.get('/download', controller.download.download.download);
  download.get('/about', controller.download.download.about);
};
