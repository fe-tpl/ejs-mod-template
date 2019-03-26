import "./index.less";
/**
 * 模块类名 —— 开发者自行定义
 * @class
 */
class EjsModTpl {
  /**
   * 构造器，初始化相关信息
   */
  constructor(moduleWrapperEle) {
    this.moduleWrapperEle = moduleWrapperEle;
    let dataStr = this.moduleWrapperEle.find("${schema-data}").val();
    this.data = JSON.parse(decodeURIComponent(dataStr));
    this.preHandle();
    this.registerEvents();
  }

  /**
   * 页面预处理
   */
  preHandle() {
    
  }

  /**
   * 注册页面相关dom操作
   * @return {void} 无返回值
   */
  registerEvents() {
    let _this = this;
    this.moduleWrapperEle.find(".xxx").off().on("click", function () {

    });
  }
}
let moduleWrappersDoms = $(".freedom-module-wrapper{module-name}");
$.each(moduleWrappersDoms, function (v, t) {
  new EjsModTpl($(t));
});
