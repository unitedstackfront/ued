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
    "director": "router/build/director.min",
    "marked": "marked/marked.min",
    "highlight": "highlight.js/highlight.pack"
  },
  jsx: {
    "fileExtension": ".jsx",
    "harmony": true,
    "stripTypes": true
  },
  shim: {
    "director": {
      "exports": "Router"
    },
    "highlight": {
      "exports": "hljs"
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