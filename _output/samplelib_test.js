// Generated by Melange
'use strict';

var Curry = require("melange.runtime/curry.js");
var Samplelib = require("./samplelib.js");

function $$return(x) {
  return Promise.resolve(x);
}

function bind(m, af) {
  return m.then(Curry.__1(af));
}

var $$Promise$1 = {
  $$return: $$return,
  bind: bind
};

function test1(param) {
  var m = Promise.resolve(2);
  var m$1 = m.then(function (x) {
        return Promise.resolve(x + 40 | 0);
      });
  return m$1.then(function (x) {
              return Promise.resolve((expect(x).toBe(42), undefined));
            });
}

function test2(param) {
  var M = Samplelib.MonadOps($$Promise$1);
  return Curry._2(M.$great$great$eq, Curry._1(M.$$return, 2), (function (x) {
                return Curry._2(M.$great$great$eq, Curry._1(M.$$return, x + 40 | 0), (function (x) {
                              return Curry._1(M.$$return, (expect(x).toBe(42), undefined));
                            }));
              }));
}

function test3(param) {
  var open = Samplelib.MonadOps($$Promise$1);
  var $great$great$eq = open[1];
  var $$return = open[0];
  return Curry._2($great$great$eq, Curry._1($$return, 2), (function (x) {
                return Curry._2($great$great$eq, Curry._1($$return, x + 40 | 0), (function (x) {
                              return Curry._1($$return, (expect(x).toBe(42), undefined));
                            }));
              }));
}

var Test = {
  test1: test1,
  test2: test2,
  test3: test3
};

exports.$$Promise = $$Promise$1;
exports.Test = Test;
/* No side effect */
