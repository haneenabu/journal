!function t(r,e,n){function o(i,s){if(!e[i]){if(!r[i]){var f="function"==typeof require&&require;if(!s&&f)return f(i,!0);if(u)return u(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var a=e[i]={exports:{}};r[i][0].call(a.exports,function(t){var e=r[i][1][t];return o(e||t)},a,a.exports,t,r,e,n)}return e[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(t,r,e){function n(t){this.entry=t}n.prototype.wordCount=function(t){return t.split(" ").length},n.prototype.wordCount=function(t){var r=0,e=t.split("");for(i=0;i<e.length;i++)"a"!=e[i]&&"e"!=e[i]&&"i"!=e[i]&&"o"!=e[i]&&"u"!=e[i]&&"y"!=e[i]||r++;return r},e.journalModule=n},{}],2:[function(t,r,e){n=t("./../js/scripts.js").journalModule;$(document).ready(function(){$("#vowel").submit(function(t){t.preventDefault();var r=$("#body").val(),e=new n("test test").wordCount(r);$("#vowelResult").text(e)})});var n=t("./../js/scripts.js").journalModule;$(document).ready(function(){$("#entry").submit(function(t){t.preventDefault();$("#title").val();var r=$("#body").val(),e=new n("test test").wordCount(r);$("#result").append(e)})})},{"./../js/scripts.js":1}]},{},[2]);