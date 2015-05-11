'use strict';

requirejs.config({
  baseUrl: './bower_components',
  paths: {
    "component": "../js/component",
    "page": "../js/page",
    "react": "react/react-with-addons.min",
    "JSXTransformer": "react/JSXTransformer",
    "text": "requirejs-text/text",
    "jsx": "jsx-requirejs-plugin/js/jsx"
  },
  jsx: {
    "fileExtension": ".jsx",
    "harmony": true,
    "stripTypes": true
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger',
    'flight/lib/debug'
  ],

  function(compose, registry, advice, withLogging, debug) {
    debug.enable(true);
    compose.mixin(registry, [advice.withAdvice]);

    require(['page/default'], function(initializeDefault) {
      initializeDefault();
    });
  }
);
