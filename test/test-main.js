'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app',

  paths: {
    "component": "js/component",
    "page": "js/page",
    "react": "lib/react/react-with-addons.min",
    "JSXTransformer": "lib/react/JSXTransformer",
    "text": "lib/requirejs-text/text",
    "jsx": "lib/jsx-requirejs-plugin/js/jsx",
    "flight": "lib/flight"
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
