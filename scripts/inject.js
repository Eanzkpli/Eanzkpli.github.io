hexo.extend.filter.register('theme_inject', (injects) => {
  injects.sidebar.file('side-shots', 'injects/side-shots.pug');
  injects.variable.push('injects/custom.styl');
});
