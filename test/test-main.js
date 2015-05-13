'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/lib',

  paths: {
    "component": "../js/component",
    "template": "../js/templates",
    "page": "../js/page",
    "mixin": "../js/mixin",
    "service": "../js/service",
    "react": "react/react-with-addons.min",
    "JSXTransformer": "react/JSXTransformer",
    "text": "requirejs-text/text",
    "jsx": "jsx-requirejs-plugin/js/jsx"
  },
  jsx: {
    "fileExtension": ".jsx",
    "harmony": true,
    "stripTypes": true
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
