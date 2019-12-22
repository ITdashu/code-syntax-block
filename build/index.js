!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){!function(){e.exports=this.wp.hooks}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(11),o=n(12);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(13);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(4),o=n.n(r),c=n(5),u=n(6),i=n.n(u),a=n(7),l=n.n(a),s=n(8),f=n.n(s),p=n(9),b=n.n(p),y=n(10),g=n.n(y),m=n(0),O=n(3),d=n(2),j=n(1),_={fontFamily:"sans-serif",fontSize:".6rem",color:"#999999",position:"absolute",top:".3rem",right:".5rem"},h=function(e){function t(){return i()(this,t),f()(this,b()(t).apply(this,arguments))}return g()(t,e),l()(t,[{key:"componentDidMount",value:function(){!this.props.attributes.language&&mkaz_code_syntax_default_lang&&this.props.setAttributes({language:mkaz_code_syntax_default_lang})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,r=e.className;return Object(m.createElement)(m.Fragment,null,Object(m.createElement)(O.InspectorControls,{key:"controls"},Object(m.createElement)(d.PanelBody,{title:Object(j.__)("Settings")},Object(m.createElement)(d.SelectControl,{label:Object(j.__)("Language"),value:t.language,options:[{label:Object(j.__)("Select code language"),value:""}].concat(Object.keys(mkaz_code_syntax_languages).map((function(e){return{label:mkaz_code_syntax_languages[e],value:e}}))),onChange:function(e){return n({language:e})}}),Object(m.createElement)(d.ToggleControl,{label:Object(j.__)("Show line numbers"),checked:t.lineNumbers,onChange:function(e){return n({lineNumbers:e})}}),Object(m.createElement)(d.TextControl,{label:Object(j.__)("Title for Code Block"),value:t.title,onChange:function(e){return n({title:e})},placeholder:Object(j.__)("Title or File (optional)")}))),Object(m.createElement)("div",{key:"editor-wrapper",className:r},Object(m.createElement)(O.PlainText,{value:t.content,onChange:function(e){return n({content:e})},placeholder:Object(j.__)("Write code…")}),Object(m.createElement)("div",{style:_},mkaz_code_syntax_languages[t.language])))}}]),t}(m.Component),v=function(e){var t=e.attributes,n="";return n=t.language?"language-"+t.language:"",n=t.lineNumbers?n+" line-numbers":n,Object(m.createElement)("pre",{title:t.title},Object(m.createElement)("code",{lang:t.language,className:n},t.content))};function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(c.addFilter)("blocks.registerBlockType","mkaz/code-syntax-block",(function(e){return"core/code"!==e.name?e:w({},e,{attributes:w({},e.attributes,{language:{type:"string",selector:"code",source:"attribute",attribute:"lang"},lineNumbers:{type:"boolean"},title:{type:"string",source:"attribute",selector:"pre",attribute:"title"}}),edit:h,save:v})}))}]);