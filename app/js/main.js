'use strict';

requirejs.config({
  baseUrl: './bower_components',
  paths: {
    "component": "../js/component",
    "page": "../js/page",
    "react": "react/react",
    "JSXTransformer": "react/JSXTransformer",
    "jsx": "react/jsx"
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
