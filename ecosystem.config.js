module.exports = {
  apps : [{
    name:  "imgserver",
    script: 'dist/index.js',
    watch: '.'
  } ],
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'imgs.plnotx01.iachieved.it',
      ref  : 'origin/main',
      repo : 'git@github.com:iachievedit/imgserver',
      path : '/apps/imgserver',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
