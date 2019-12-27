/**
 * Created by qianggao on  2019/3/6
 */
'use strict';

/**
 * 规范: 驼峰命名方式，开头小写，第二个字母大小。
 * 按模块注释开始与结束
 * 每个模块之间用两行空行分隔
 * 接口注释在右侧，必须写
 */
module.exports = {
  plateList: { url: '/api/support/plateList' }, // 问答板块列表
  qaDetails: { url: '/api/support/qaDetails' }, // 获取问答标题列表 & 展开答案
  repaymentHelp: { url: '/api/support/repaymentHelp' }, // 还款帮助
  serviceTel: { url: '/api/support/serviceTel' }, // 获取客服电话
  getAuthenticationInfo: { url: '/api/protocol/getAuthenticationInfo' }, // 认证中心协议信息
  getDeductionInfo: { url: '/api/protocol/getDeductionInfo' }, // 授权扣款委托书信息
  getLoanInfo: { url: '/api/protocol/getLoanInfo' }, // 借款协议
  getPlatformInfo: { url: '/api/protocol/getPlatformInfo' }, // 平台服务协议信息
  getCode:{url:'/api/authCode/send'},//获取验证码
  registerUser:{url:'/api/register/webRegister'},//注册
  getVipStatus:{url:'/api/vip/getVipStatus'},//获取用户是否是VIP
  valueAddedService:{url:'/api/vip/valueAddedService'},//查询VIP增值服务状态
  changeValueAddedService:{url:'/api/vip/changeValueAddedService'},//修改VIP增值服务状态
  openQuery:{url:'/api/openaccount/openQuery'}, //签约结果类型为1
  getRegisterInfo:{url:'/api/protocol/getRegisterInfo'}, //获取注册协议
  getCreditInfo:{url:'/api/protocol/getCreditInfo'}, //信用协议
  getBorrowZiXun:{url:'/api/protocol/loanConsult'}, //借款咨询
  presonalCostInfo:{url:'/api/protocol/presonalCostInfo'}, //  个人消费借款合同

};
