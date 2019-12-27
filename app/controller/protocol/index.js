
'use strict';
// 协议
const BaseController = require('../base');
class ProtocolController extends BaseController {

  async index5() { // 注册协议 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const params = { userToken: token };
    const result = await this.javaPost(this.app.I.getRegisterInfo.url, params);
    if(result.data && result.data.company){
      result.data.companyName = result.data.company
    }
    console.log('注册')
    console.log(importantInfo)
    const resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    await this.ctx.render('protocol/user-register-protocol', { data: resultIno, oldData: result.data,importantInfo});
  }

  async index() { // 征信查询授权书    ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const sign = this.sign({}, token);
    const params = { token, sign };
    const result = await this.javaPost(this.app.I.getAuthenticationInfo.url, params);
    const resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    console.log(resultIno)
    await this.render('protocol/credit-query-proxy', { data: resultIno,oldData:result.data,importantInfo});
  }

  async index_2() { // 征信查询授权书_电子签名    ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const sign = this.sign({}, token);
    const params = { token, sign };
    const result = await this.javaPost(this.app.I.getAuthenticationInfo.url, params);
    const resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    console.log(resultIno)
    await this.render('protocol/credit-query-proxy2', { data: resultIno,oldData:result,importantInfo});
  }

  async index2() { // 个人信息使用和第三方机构数据查询授权书    ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const sign = this.sign({}, token);
    const params = { token, sign };
    const result = await this.javaPost(this.app.I.getAuthenticationInfo.url, params);
    const resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    await this.render('protocol/personal-info-and-data-query-proxy', { data: resultIno,oldData:result,importantInfo });
  }
  async index3() { // 电子签章及存证授权委托书      未发现修改
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const sign = this.sign({}, token);
    const params = { token, sign };
    const result = await this.javaPost(this.app.I.getAuthenticationInfo.url, params);
    const resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    console.log(resultIno)
    await this.render('protocol/electronic-signature-and-existing-evidence-proxy', { data: resultIno,oldData:result,importantInfo });
  }

  async index4() { // 借款协议 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const amount = this.ctx.request.query.amount || '';
    const borrowid = this.ctx.request.query.loanId || '';
    let params;
    let sign;
    let resultIno;
    let result;
    let oldData;
    if (borrowid === '') {
      let front = {}
      sign = this.sign({}, token);
      params = { token, sign };
      result = await this.javaPost(this.app.I.getLoanInfo.url, params);
      oldData = JSON.parse(result.data)
      // 金额 && 大写金额
      if(amount){
        let integer = amount.split('.')[0]
        front.money = integer
        front.moneyCapital = this.DX(integer)
      }else{
        front.money = "*"
        front.moneyCapital = '*圆整';
      }
      // 期数
      if(this.ctx.request.query.loanDays){
        const loanDays = parseInt(this.ctx.request.query.loanDays)
        front.loanDays = loanDays
      }else{
        front.loanDays = "**"
      }
      // 银行卡号(后四位)
      if(this.ctx.request.query.bank){
        let bankNum = this.ctx.request.query.bank.substr(-5, 4)
        let CardNoLastFour = '****' + bankNum;
        front.receivedCardNo = CardNoLastFour;
      }else{
        front.receivedCardNo = ''
      }
      console.log(front)
      resultIno = Object.assign(front,JSON.parse(JSON.stringify(this.config.info)), oldData);

    } else {
      sign = this.sign({ id: borrowid }, token);
      params = { token, sign, id: borrowid };
      result = await this.javaPost(this.app.I.getLoanInfo.url, params);
      oldData = JSON.parse(result.data)
      resultIno = Object.assign(JSON.parse(JSON.stringify(this.config.info)), oldData);
    }
    await this.render('protocol/platform-service', { data: resultIno, oldData,importantInfo});
  }
  async index4_2() { // 借款协议 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const amount = this.ctx.request.query.amount || '';
    const borrowid = this.ctx.request.query.loanId || '';
    let params;
    let sign;
    let resultIno;
    let result;
    let oldData;
    if (borrowid === '') {
      let front = {}
      sign = this.sign({}, token);
      params = { token, sign };
      result = await this.javaPost(this.app.I.getLoanInfo.url, params);
      oldData = JSON.parse(result.data)
      // 金额 && 大写金额
      if(amount){
        let integer = amount.split('.')[0]
        front.money = integer
        front.moneyCapital = this.DX(integer)
      }else{
        front.money = "*"
        front.moneyCapital = '*圆整';
      }
      // 期数
      if(this.ctx.request.query.loanDays){
        const loanDays = parseInt(this.ctx.request.query.loanDays)
        front.loanDays = loanDays
      }else{
        front.loanDays = "**"
      }
      // 银行卡号(后四位)
      if(this.ctx.request.query.bank){
        let bankNum = this.ctx.request.query.bank.substr(-5, 4)
        let CardNoLastFour = '****' + bankNum;
        front.receivedCardNo = CardNoLastFour;
      }else{
        front.receivedCardNo = ''
      }
      console.log(front)
      resultIno = Object.assign(front,JSON.parse(JSON.stringify(this.config.info)), oldData);

    } else {
      sign = this.sign({ id: borrowid }, token);
      params = { token, sign, id: borrowid };
      result = await this.javaPost(this.app.I.getLoanInfo.url, params);
      oldData = JSON.parse(result.data)
      resultIno = Object.assign(JSON.parse(JSON.stringify(this.config.info)), oldData);
    }
    await this.render('protocol/platform-service2', { data: resultIno, oldData,importantInfo});
  }
  async index6() { // 平台服务协议 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const borrowid = this.ctx.request.query.id || '';
    const sign = this.sign({ id: borrowid }, token);
    const params = { token, sign, id: borrowid };
    const result = await this.javaPost(this.app.I.getPlatformInfo.url, params);
    if(result.data && result.data.company){
      result.data.companyName = result.data.company
    }
    const resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    await this.render('protocol/user-service-protocol', { data: resultIno,oldData:result.data,importantInfo });
  }
  async index7() { // 授权扣款委托书
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const borrowid = this.ctx.request.query.loanId || '';
    let params;
    let sign;
    let resultIno;
    let result
    let front = {}
    // 银行 && 卡号
    front.cardNo = this.ctx.request.query.bankCard || '';
    front.bankName = this.ctx.request.query.bankName || '';
    // // 联系电话: mobile
    // front.mobile = this.ctx.request.query.phone || ''
    // // 身份证号
    // front.identification = this.ctx.request.query.idCard || ''
    if (borrowid === '') {
      sign = this.sign({}, token);
      params = { token, sign };
      result = await this.javaPost(this.app.I.getDeductionInfo.url, params);
      resultIno = Object.assign(front, JSON.parse(JSON.stringify(this.config.info)), result.data);
    } else {
      sign = this.sign({ id: borrowid }, token);
      params = { token, sign, id: borrowid };
      result = await this.javaPost(this.app.I.getDeductionInfo.url, params);
      resultIno = Object.assign(front, JSON.parse(JSON.stringify(this.config.info)), result.data);
    }
    await this.render('protocol/entrust-deduction-proxy', { data: resultIno,oldData:result.data,importantInfo });
  }

  async index8() { // 运营商信息授权协议 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    await this.ctx.render('protocol/operator-authorization-protocol', { data: this.config.info,importantInfo });
  }
  async index9() { // 隐私保护政策 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    await this.ctx.render('protocol/privacy-protocol', { data: this.config.info,importantInfo });
  }
  async index10() { // 赊销服务协议 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    await this.ctx.render('protocol/creditService-protocol', { data: this.config.info,importantInfo });
  }
  async index11() { // 失信风险警示 ok
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    await this.ctx.render('protocol/breakPromise-protocol', { data: this.config.info,importantInfo });
  }
  async index12() { // 签约成功，失败，银行处理中
    let type = this.ctx.request.query.type;
    let token;
    let params;
    let sign;
    let result;
    if(type.indexOf('_') != -1){
      console.log("type为1")
      token = type.split('_')[1]
      type = type.split('_')[0];
      sign = this.sign({}, token);
      params = { token, sign };
      result = await this.javaPost(this.app.I.openQuery.url, params);
      console.log(result)
    }
    await this.ctx.render('protocol/sign-contract', { data:type });
  }
  async index13() { // 增值服务协议
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const borrowid = this.ctx.request.query.id
    let params = { id: borrowid }
    let result = await this.javaPost(this.app.I.getCreditInfo.url, params);
    console.log("增值服务协议 result :")
    console.log(result)
    let resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    console.log(resultIno)
    await this.ctx.render('protocol/addService', { data: resultIno, oldData: result.data,importantInfo});
  }
  async index14() { // 信用服务协议
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const borrowid = this.ctx.request.query.id
    let params = { id: borrowid }
    let result = await this.javaPost(this.app.I.getCreditInfo.url, params);
    let resultIno = Object.assign({}, JSON.parse(JSON.stringify(this.config.info)), result.data);
    console.log(resultIno)
    await this.ctx.render('protocol/credit-service-protocol', { data: resultIno, oldData: result.data,importantInfo});
  }
  async index15() { // 
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const loanId = this.ctx.request.query.loanId || '';
    const sign = this.sign({ id: loanId }, token);
    const params = {token, sign, id: loanId };
    const result = await this.javaPost(this.app.I.getBorrowZiXun.url, params);
    const resultIno = Object.assign({},result.data);
    if(resultIno && resultIno.url){
      this.ctx.unsafeRedirect(resultIno.url);
    }
    await this.ctx.render('protocol/loan-counseling',{ data: resultIno,importantInfo});
  }
  async index15_2() { // 借款咨询pdf
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const loanId = this.ctx.request.query.loanId || '';
    const sign = this.sign({ id: loanId }, token);
    const params = {token, sign, id: loanId };
    const result = await this.javaPost(this.app.I.getBorrowZiXun.url, params);
    const resultIno = Object.assign({},result.data);
    console.log(resultIno)
    if(resultIno && resultIno.url){
      this.ctx.unsafeRedirect(resultIno.url);
    }
    await this.ctx.render('protocol/loan-counseling2',{ data: resultIno,importantInfo});
  }
  async index16() { // 个人消费借款合同
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const amount = this.ctx.request.query.amount || '';
    const loanPurpose = this.ctx.request.query.purpose || '';
    const borrowid = this.ctx.request.query.loanId || '';
    let params;
    let sign;
    let resultIno;
    let result;
    let oldData;
    if (borrowid === '') {
      let front = {}
      sign = this.sign({}, token);
      params = { token, sign };
      result = await this.javaPost(this.app.I.presonalCostInfo.url, params);
      console.log(result)
      oldData = result.data
      // 金额 && 大写金额
      if(amount){
        let integer = amount.split('.')[0]
        front.money = integer
        front.moneyCapital = this.DX(integer)
      }else{
        front.money = "*"
        front.moneyCapital = '*圆整';
      }
      // 期数
      if(this.ctx.request.query.loanDays){
        const loanDays = parseInt(this.ctx.request.query.loanDays)
        front.stage = this.DX2(loanDays)
      }else{
        front.loanDays = "**"
      }
      // 借款用途
      front.loanPurpose = loanPurpose
      front.bankNo = this.ctx.request.query.bankCard || '';
      console.log(front)
      resultIno = Object.assign(front,JSON.parse(JSON.stringify(this.config.info)), oldData);
    } else {
      sign = this.sign({ id: borrowid }, token);
      params = { token, sign, id: borrowid };
      result = await this.javaPost(this.app.I.presonalCostInfo.url, params);
      oldData = result.data
      if(oldData && oldData.loanContractUrl){
        this.ctx.unsafeRedirect(oldData.loanContractUrl);
      }
      console.log(oldData)
      resultIno = Object.assign(JSON.parse(JSON.stringify(this.config.info)), oldData);
    }
    await this.ctx.render('protocol/individual-consumption-loan-contract',{ data: resultIno,importantInfo });
  }
  async index16_2() { // 个人消费借款合同 PDF
    const importantInfo ={version:this.ctx.request.query.version,importantCompanyName:this.config.info.importantCompanyName,importantCompanyShortName:this.config.info.importantCompanyShortName}
    const token = this.ctx.request.query.token || '';
    const amount = this.ctx.request.query.amount || '';
    const loanPurpose = this.ctx.request.query.purpose || '';
    const borrowid = this.ctx.request.query.loanId || '';
    let params;
    let sign;
    let resultIno;
    let result;
    let oldData;
    if (borrowid === '') {
      let front = {}
      sign = this.sign({}, token);
      params = { token, sign };
      result = await this.javaPost(this.app.I.presonalCostInfo.url, params);
      console.log(result)
      oldData = result.data
      // 金额 && 大写金额
      if(amount){
        let integer = amount.split('.')[0]
        front.money = integer
        front.moneyCapital = this.DX(integer)
      }else{
        front.money = "*"
        front.moneyCapital = '*圆整';
      }
      // 期数
      if(this.ctx.request.query.loanDays){
        const loanDays = parseInt(this.ctx.request.query.loanDays)
        front.stage = this.DX(loanDays)
      }else{
        front.loanDays = "**"
      }
      // 借款用途
      front.loanPurpose = loanPurpose;
      front.bankNo = this.ctx.request.query.bankCard || '';
      console.log(front)
      resultIno = Object.assign(front,JSON.parse(JSON.stringify(this.config.info)), oldData);

    } else {
      sign = this.sign({ id: borrowid }, token);
      params = { token, sign, id: borrowid };
      result = await this.javaPost(this.app.I.presonalCostInfo.url, params);
      oldData = result.data
      if(oldData && oldData.loanContractUrl){
        this.ctx.unsafeRedirect(oldData.loanContractUrl);
      }
      console.log(oldData)
      resultIno = Object.assign(JSON.parse(JSON.stringify(this.config.info)), oldData);
    }
    await this.ctx.render('protocol/individual-consumption-loan-contract2',{ data: resultIno,importantInfo });
  }
  DX(n) {
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) { return ''; }
    let unit = '千百拾亿千百拾万千百拾元角分',
      str = '';
    n += '00';
    const p = n.indexOf('.');
    if (p >= 0) { n = n.substring(0, p) + n.substr(p + 1, 2); }
    unit = unit.substr(unit.length - n.length);
    for (let i = 0; i < n.length; i++) { str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i); }
    return str.replace(/零(千|百|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|元)/g, '$1')
      .replace(/(亿)万|壹(拾)/g, '$1$2')
      .replace(/^元零?|零分/g, '')
      .replace(/元$/g, '圆整');
  }
  DX2(Num) {
      for ( var i = Num.length - 1; i >= 0; i--) {
        Num = Num.replace(",", "")//替换Num中的“,”
        Num = Num.replace(" ", "")//替换Num中的空格
      }
      if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return;
      }
      //字符处理完毕后开始转换，采用前后两部分分别转换
      let part = String(Num).split(".");
      let newchar = "";
      //小数点前进行转化
      for (let i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
          //alert("位数过大，无法计算");
          return "";
        }//若数量超过拾亿单位，提示
       let tmpnewchar = ""
       let perchar = part[0].charAt(i);
        switch (perchar) {
          case "0": tmpnewchar = "零" + tmpnewchar; break;
          case "1": tmpnewchar = "一" + tmpnewchar; break;
          case "2": tmpnewchar = "二" + tmpnewchar; break;
          case "3": tmpnewchar = "三" + tmpnewchar; break;
          case "4": tmpnewchar = "四" + tmpnewchar; break;
          case "5": tmpnewchar = "五" + tmpnewchar; break;
          case "6": tmpnewchar = "六" + tmpnewchar; break;
          case "7": tmpnewchar = "七" + tmpnewchar; break;
          case "8": tmpnewchar = "八" + tmpnewchar; break;
          case "9": tmpnewchar = "九" + tmpnewchar; break;
        }
        switch (part[0].length - i - 1) {
          case 0: tmpnewchar = tmpnewchar; break;
          case 1: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
          case 2: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
          case 3: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
          case 4: tmpnewchar = tmpnewchar + "万"; break;
          case 5: if (perchar != 0) tmpnewchar = tmpnewchar + "十"; break;
          case 6: if (perchar != 0) tmpnewchar = tmpnewchar + "百"; break;
          case 7: if (perchar != 0) tmpnewchar = tmpnewchar + "千"; break;
          case 8: tmpnewchar = tmpnewchar + "亿"; break;
          case 9: tmpnewchar = tmpnewchar + "十"; break;
        }
        newchar = tmpnewchar + newchar;
      }
      //替换所有无用汉字，直到没有此类无用的数字为止
      while (newchar.search("零零") != -1 || newchar.search("零亿") != -1 || newchar.search("亿万") != -1 || newchar.search("零万") != -1) {
        newchar = newchar.replace("零亿", "亿");
        newchar = newchar.replace("亿万", "亿");
        newchar = newchar.replace("零万", "万");
        newchar = newchar.replace("零零", "零");
      }
      //替换以“一十”开头的，为“十”
      if (newchar.indexOf("一十") == 0) {
        newchar = newchar.substr(1);
      }
      //替换以“零”结尾的，为“”
      if (newchar.lastIndexOf("零") == newchar.length - 1) {
        newchar = newchar.substr(0, newchar.length - 1);
      }
      return newchar;
  }
}

module.exports = ProtocolController;

