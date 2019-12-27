'use strict';
// 帮助中心
const BaseController = require('../base');
class HomeController extends BaseController {
  async index() {
    await this.ctx.render('helpCenter/index');
  }
  // 问答板块列表
  async plateList() {
    const result = await this.javaGet(this.app.I.plateList.url, '');
    this.ctx.body = result;
  }
  // 获取问答标题列表 & 展开答案
  async qaDetails() {
    const idParams = {
      subjectId: parseInt(this.ctx.request.query.subjectId),
    };
    const result = await this.javaGet(this.app.I.qaDetails.url, idParams);
    this.ctx.body = result;
  }
  // // 还款帮助
  // async repaymentHelp() {
  //   const result = await this.javaGet(this.app.I.repaymentHelp.url, '');
  //   this.ctx.body = result;
  // }
  // 获取客服电话
  async serviceTel() {
    const result = await this.javaGet(this.app.I.serviceTel.url, '');
    this.ctx.body = result;
  }

  async helpDetail() {
    await this.ctx.render('helpCenter/helpDetail',{helpId:this.ctx.request.query.helpId,helpName:this.ctx.request.query.helpName});
  }

}

module.exports = HomeController;
