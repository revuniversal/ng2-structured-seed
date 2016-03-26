module.exports = function (config) {
  config.set({
    plugins: ['karma-systemjs', 'karma-jasmine', 'karma-chrome-launcher'],
    frameworks: ['systemjs', 'jasmine'],
    
    basePath: '',
    files: [
      {
        pattern: 'app/*.ts',
        included: false,
        served: true,
        watched: true
      },
      { 
        pattern: 'app/**/*.ts',
        included: false,
        served: true,
        watched: true
      },
      {
        pattern: 'app/*.spec.ts',
        included: true,
        served: true,
        watched: true 
      },
      {
        pattern: 'app/**/*.spec.ts',
        included: true,
        served: true,
        watched: true
      }
    ],
    
    systemjs: {
      includeFiles: [
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system-polyfills.js',
        'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js'
      ],
      serveFiles: [
        'app/**/*.spec.ts',
        'app/*.spec.ts',
      ],
      
      configFile: 'system.conf.js',
      config: {
        transpiler: 'typescript',
        paths: {
          'angular2/*': 'node_modules/angular2/*.js'
        },
        packages: {
          node_modules: {defaultExtension: 'js' },
          app: {defaultExtension: 'ts' }
        }
      }
    },
    
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
