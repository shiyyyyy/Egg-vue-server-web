/**
 * Created by qianggao on  2019/3/9
 */
'use strict';

module.exports = app => {
  const { router, controller } = app;
  const protocol = router.namespace('/protocol');
  protocol.get('/credit-query-proxy', controller.protocol.index.index);   // 征信查询授权书
  protocol.get('/credit-query-proxy2', controller.protocol.index.index_2);  // 征信查询授权书_电子签名
  protocol.get('/personal-info-and-data-query-proxy', controller.protocol.index.index2);  // 个人信息使用和第三方机构数据查询授权书
  protocol.get('/electronic-signature-and-existing-evidence-proxy', controller.protocol.index.index3);  // 电子签章及存证授权委托书
  protocol.get('/platform-service', controller.protocol.index.index4);  // 借款协议
  protocol.get('/platform-service2', controller.protocol.index.index4_2);  // 借款协议
  protocol.get('/user-register-protocol', controller.protocol.index.index5);  // 注册协议
  protocol.get('/user-service-protocol', controller.protocol.index.index6);   // 平台服务协议
  protocol.get('/entrust-deduction-proxy', controller.protocol.index.index7); // 授权扣款委托书
  protocol.get('/operator-authorization-protocol', controller.protocol.index.index8);   // 运营商信息授权协议
  protocol.get('/privacy-protocol', controller.protocol.index.index9);  // 隐私保护政策
  protocol.get('/creditService-protocol', controller.protocol.index.index10);   // 赊销服务协议
  protocol.get('/breakPromise-protocol', controller.protocol.index.index11);    // 失信风险警示
  protocol.get('/sign-contract', controller.protocol.index.index12);    // 签约成功 失败 银行处理中
  protocol.get('/addService', controller.protocol.index.index13);   // 增值服务协议
  protocol.get('/credit-service-protocol', controller.protocol.index.index14);   // 信用服务协议
  protocol.get('/loan-counseling', controller.protocol.index.index15);   // 借款咨询
  protocol.get('/loan-counseling2', controller.protocol.index.index15_2);   // pdf
  protocol.get('/individual-consumption-loan-contract', controller.protocol.index.index16);   // 个人消费借款合同
  protocol.get('/individual-consumption-loan-contract2', controller.protocol.index.index16_2);   // 个人消费借款合同 PDF
};
