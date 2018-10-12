import "./index.less";
/**
 * 模块类名 —— 开发者自行定义
 * @class
 */
class EjsModTpl {
  /**
   * 构造器，初始化相关信息
   */
  constructor() {
    this.registerEvents();
  }

  /**
   * 注册页面相关dom操作
   * @return {void} 无返回值
   */
  registerEvents() {
    $("body").on("click", ".xxxx", function () {

    });
  }
}
new EjsModTpl();