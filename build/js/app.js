!function n(r,o,t){function e(i,a){if(!o[i]){if(!r[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=o[i]={exports:{}};r[i][0].call(l.exports,function(n){var o=r[i][1][n];return e(o?o:n)},l,l.exports,n,r,o,t)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)e(t[i]);return e}({1:[function(n,r,o){function t(n){this.skin=n}t.prototype.pingPong=function(n){for(var r=[],o=1;o<=n;){var t="";o%3===0&&(t+="ping"),o%5===0&&(t+="pong"),""===t&&(t+=o),r.push(t),o++}return r},o.calculatorModule=t},{}],2:[function(n,r,o){var t=n("./../js/calculator.js").calculatorModule;$(document).ready(function(){$("#ping-pong-form").submit(function(n){n.preventDefault();var r=$("#goal").val(),o=new t("mauve"),e=o.pingPong(r);e.forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var r=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+r+" has been added to our list!</p>")})})},{"./../js/calculator.js":1}]},{},[2]);