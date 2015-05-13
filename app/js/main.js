'use strict';

requirejs.config({
  baseUrl: './lib',
  paths: {
    "component": "../js/component",
    "template": "../js/templates",
    "page": "../js/page",
    "mixin": "../js/mixin",
    "service": "../js/service",
    "react": "react/react-with-addons.min",
    "JSXTransformer": "react/JSXTransformer",
    "text": "requirejs-text/text",
    "jsx": "jsx-requirejs-plugin/js/jsx",
    "director": "router/build/director.min"
  },
  jsx: {
    "fileExtension": ".jsx",
    "harmony": true,
    "stripTypes": true
  },
  shim: {
    "director": {
      "exports": "Router"
    }
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