// 增加支持对antd组件的默认配置
const {
  override,
  addLessLoader,
  addFilterCSSConflictingWarning,
} = require('@ali/customize-cra-extra');
module.exports = {
  /**
   * [webpack description]
   *
   * @param   {[type]}  config  [CRA's webpack config]
   * @param   {[type]}  env     [process.env.NODE_ENV 'development' || 'production']
   *
   * @return  {Object}          [return new webpack config]
   */
  /* eslint-disable no-unused-vars */
  webpack(config, env) {
    // ... add your webpack config
    return override(
      addLessLoader({
        javascriptEnabled: true
      }),
      addFilterCSSConflictingWarning(),
    )(config, env);
  }
};
