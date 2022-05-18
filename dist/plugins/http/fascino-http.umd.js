/**
	* Fascino  
	* @version v1.0.0
	* @copyright 2021-2022 Robert Pérez.
	* @author Robert Pérez <delfinmundo@gmail.com>
	* 
	* @license Licensed under MIT
	*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["fascino-http"] = {}));
})(this, (function (exports) { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var regenerator = {exports: {}};

  var runtime = {exports: {}};

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (module) {
  	var runtime = (function (exports) {

  	  var Op = Object.prototype;
  	  var hasOwn = Op.hasOwnProperty;
  	  var undefined$1; // More compressible than void 0.
  	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  	  function define(obj, key, value) {
  	    Object.defineProperty(obj, key, {
  	      value: value,
  	      enumerable: true,
  	      configurable: true,
  	      writable: true
  	    });
  	    return obj[key];
  	  }
  	  try {
  	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
  	    define({}, "");
  	  } catch (err) {
  	    define = function(obj, key, value) {
  	      return obj[key] = value;
  	    };
  	  }

  	  function wrap(innerFn, outerFn, self, tryLocsList) {
  	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
  	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
  	    var generator = Object.create(protoGenerator.prototype);
  	    var context = new Context(tryLocsList || []);

  	    // The ._invoke method unifies the implementations of the .next,
  	    // .throw, and .return methods.
  	    generator._invoke = makeInvokeMethod(innerFn, self, context);

  	    return generator;
  	  }
  	  exports.wrap = wrap;

  	  // Try/catch helper to minimize deoptimizations. Returns a completion
  	  // record like context.tryEntries[i].completion. This interface could
  	  // have been (and was previously) designed to take a closure to be
  	  // invoked without arguments, but in all the cases we care about we
  	  // already have an existing method we want to call, so there's no need
  	  // to create a new function object. We can even get away with assuming
  	  // the method takes exactly one argument, since that happens to be true
  	  // in every case, so we don't have to touch the arguments object. The
  	  // only additional allocation required is the completion record, which
  	  // has a stable shape and so hopefully should be cheap to allocate.
  	  function tryCatch(fn, obj, arg) {
  	    try {
  	      return { type: "normal", arg: fn.call(obj, arg) };
  	    } catch (err) {
  	      return { type: "throw", arg: err };
  	    }
  	  }

  	  var GenStateSuspendedStart = "suspendedStart";
  	  var GenStateSuspendedYield = "suspendedYield";
  	  var GenStateExecuting = "executing";
  	  var GenStateCompleted = "completed";

  	  // Returning this object from the innerFn has the same effect as
  	  // breaking out of the dispatch switch statement.
  	  var ContinueSentinel = {};

  	  // Dummy constructor functions that we use as the .constructor and
  	  // .constructor.prototype properties for functions that return Generator
  	  // objects. For full spec compliance, you may wish to configure your
  	  // minifier not to mangle the names of these two functions.
  	  function Generator() {}
  	  function GeneratorFunction() {}
  	  function GeneratorFunctionPrototype() {}

  	  // This is a polyfill for %IteratorPrototype% for environments that
  	  // don't natively support it.
  	  var IteratorPrototype = {};
  	  define(IteratorPrototype, iteratorSymbol, function () {
  	    return this;
  	  });

  	  var getProto = Object.getPrototypeOf;
  	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  	  if (NativeIteratorPrototype &&
  	      NativeIteratorPrototype !== Op &&
  	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
  	    // This environment has a native %IteratorPrototype%; use it instead
  	    // of the polyfill.
  	    IteratorPrototype = NativeIteratorPrototype;
  	  }

  	  var Gp = GeneratorFunctionPrototype.prototype =
  	    Generator.prototype = Object.create(IteratorPrototype);
  	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  	  define(Gp, "constructor", GeneratorFunctionPrototype);
  	  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  	  GeneratorFunction.displayName = define(
  	    GeneratorFunctionPrototype,
  	    toStringTagSymbol,
  	    "GeneratorFunction"
  	  );

  	  // Helper for defining the .next, .throw, and .return methods of the
  	  // Iterator interface in terms of a single ._invoke method.
  	  function defineIteratorMethods(prototype) {
  	    ["next", "throw", "return"].forEach(function(method) {
  	      define(prototype, method, function(arg) {
  	        return this._invoke(method, arg);
  	      });
  	    });
  	  }

  	  exports.isGeneratorFunction = function(genFun) {
  	    var ctor = typeof genFun === "function" && genFun.constructor;
  	    return ctor
  	      ? ctor === GeneratorFunction ||
  	        // For the native GeneratorFunction constructor, the best we can
  	        // do is to check its .name property.
  	        (ctor.displayName || ctor.name) === "GeneratorFunction"
  	      : false;
  	  };

  	  exports.mark = function(genFun) {
  	    if (Object.setPrototypeOf) {
  	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
  	    } else {
  	      genFun.__proto__ = GeneratorFunctionPrototype;
  	      define(genFun, toStringTagSymbol, "GeneratorFunction");
  	    }
  	    genFun.prototype = Object.create(Gp);
  	    return genFun;
  	  };

  	  // Within the body of any async function, `await x` is transformed to
  	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  	  // meant to be awaited.
  	  exports.awrap = function(arg) {
  	    return { __await: arg };
  	  };

  	  function AsyncIterator(generator, PromiseImpl) {
  	    function invoke(method, arg, resolve, reject) {
  	      var record = tryCatch(generator[method], generator, arg);
  	      if (record.type === "throw") {
  	        reject(record.arg);
  	      } else {
  	        var result = record.arg;
  	        var value = result.value;
  	        if (value &&
  	            typeof value === "object" &&
  	            hasOwn.call(value, "__await")) {
  	          return PromiseImpl.resolve(value.__await).then(function(value) {
  	            invoke("next", value, resolve, reject);
  	          }, function(err) {
  	            invoke("throw", err, resolve, reject);
  	          });
  	        }

  	        return PromiseImpl.resolve(value).then(function(unwrapped) {
  	          // When a yielded Promise is resolved, its final value becomes
  	          // the .value of the Promise<{value,done}> result for the
  	          // current iteration.
  	          result.value = unwrapped;
  	          resolve(result);
  	        }, function(error) {
  	          // If a rejected Promise was yielded, throw the rejection back
  	          // into the async generator function so it can be handled there.
  	          return invoke("throw", error, resolve, reject);
  	        });
  	      }
  	    }

  	    var previousPromise;

  	    function enqueue(method, arg) {
  	      function callInvokeWithMethodAndArg() {
  	        return new PromiseImpl(function(resolve, reject) {
  	          invoke(method, arg, resolve, reject);
  	        });
  	      }

  	      return previousPromise =
  	        // If enqueue has been called before, then we want to wait until
  	        // all previous Promises have been resolved before calling invoke,
  	        // so that results are always delivered in the correct order. If
  	        // enqueue has not been called before, then it is important to
  	        // call invoke immediately, without waiting on a callback to fire,
  	        // so that the async generator function has the opportunity to do
  	        // any necessary setup in a predictable way. This predictability
  	        // is why the Promise constructor synchronously invokes its
  	        // executor callback, and why async functions synchronously
  	        // execute code before the first await. Since we implement simple
  	        // async functions in terms of async generators, it is especially
  	        // important to get this right, even though it requires care.
  	        previousPromise ? previousPromise.then(
  	          callInvokeWithMethodAndArg,
  	          // Avoid propagating failures to Promises returned by later
  	          // invocations of the iterator.
  	          callInvokeWithMethodAndArg
  	        ) : callInvokeWithMethodAndArg();
  	    }

  	    // Define the unified helper method that is used to implement .next,
  	    // .throw, and .return (see defineIteratorMethods).
  	    this._invoke = enqueue;
  	  }

  	  defineIteratorMethods(AsyncIterator.prototype);
  	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
  	    return this;
  	  });
  	  exports.AsyncIterator = AsyncIterator;

  	  // Note that simple async functions are implemented on top of
  	  // AsyncIterator objects; they just return a Promise for the value of
  	  // the final result produced by the iterator.
  	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
  	    if (PromiseImpl === void 0) PromiseImpl = Promise;

  	    var iter = new AsyncIterator(
  	      wrap(innerFn, outerFn, self, tryLocsList),
  	      PromiseImpl
  	    );

  	    return exports.isGeneratorFunction(outerFn)
  	      ? iter // If outerFn is a generator, return the full iterator.
  	      : iter.next().then(function(result) {
  	          return result.done ? result.value : iter.next();
  	        });
  	  };

  	  function makeInvokeMethod(innerFn, self, context) {
  	    var state = GenStateSuspendedStart;

  	    return function invoke(method, arg) {
  	      if (state === GenStateExecuting) {
  	        throw new Error("Generator is already running");
  	      }

  	      if (state === GenStateCompleted) {
  	        if (method === "throw") {
  	          throw arg;
  	        }

  	        // Be forgiving, per 25.3.3.3.3 of the spec:
  	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
  	        return doneResult();
  	      }

  	      context.method = method;
  	      context.arg = arg;

  	      while (true) {
  	        var delegate = context.delegate;
  	        if (delegate) {
  	          var delegateResult = maybeInvokeDelegate(delegate, context);
  	          if (delegateResult) {
  	            if (delegateResult === ContinueSentinel) continue;
  	            return delegateResult;
  	          }
  	        }

  	        if (context.method === "next") {
  	          // Setting context._sent for legacy support of Babel's
  	          // function.sent implementation.
  	          context.sent = context._sent = context.arg;

  	        } else if (context.method === "throw") {
  	          if (state === GenStateSuspendedStart) {
  	            state = GenStateCompleted;
  	            throw context.arg;
  	          }

  	          context.dispatchException(context.arg);

  	        } else if (context.method === "return") {
  	          context.abrupt("return", context.arg);
  	        }

  	        state = GenStateExecuting;

  	        var record = tryCatch(innerFn, self, context);
  	        if (record.type === "normal") {
  	          // If an exception is thrown from innerFn, we leave state ===
  	          // GenStateExecuting and loop back for another invocation.
  	          state = context.done
  	            ? GenStateCompleted
  	            : GenStateSuspendedYield;

  	          if (record.arg === ContinueSentinel) {
  	            continue;
  	          }

  	          return {
  	            value: record.arg,
  	            done: context.done
  	          };

  	        } else if (record.type === "throw") {
  	          state = GenStateCompleted;
  	          // Dispatch the exception by looping back around to the
  	          // context.dispatchException(context.arg) call above.
  	          context.method = "throw";
  	          context.arg = record.arg;
  	        }
  	      }
  	    };
  	  }

  	  // Call delegate.iterator[context.method](context.arg) and handle the
  	  // result, either by returning a { value, done } result from the
  	  // delegate iterator, or by modifying context.method and context.arg,
  	  // setting context.delegate to null, and returning the ContinueSentinel.
  	  function maybeInvokeDelegate(delegate, context) {
  	    var method = delegate.iterator[context.method];
  	    if (method === undefined$1) {
  	      // A .throw or .return when the delegate iterator has no .throw
  	      // method always terminates the yield* loop.
  	      context.delegate = null;

  	      if (context.method === "throw") {
  	        // Note: ["return"] must be used for ES3 parsing compatibility.
  	        if (delegate.iterator["return"]) {
  	          // If the delegate iterator has a return method, give it a
  	          // chance to clean up.
  	          context.method = "return";
  	          context.arg = undefined$1;
  	          maybeInvokeDelegate(delegate, context);

  	          if (context.method === "throw") {
  	            // If maybeInvokeDelegate(context) changed context.method from
  	            // "return" to "throw", let that override the TypeError below.
  	            return ContinueSentinel;
  	          }
  	        }

  	        context.method = "throw";
  	        context.arg = new TypeError(
  	          "The iterator does not provide a 'throw' method");
  	      }

  	      return ContinueSentinel;
  	    }

  	    var record = tryCatch(method, delegate.iterator, context.arg);

  	    if (record.type === "throw") {
  	      context.method = "throw";
  	      context.arg = record.arg;
  	      context.delegate = null;
  	      return ContinueSentinel;
  	    }

  	    var info = record.arg;

  	    if (! info) {
  	      context.method = "throw";
  	      context.arg = new TypeError("iterator result is not an object");
  	      context.delegate = null;
  	      return ContinueSentinel;
  	    }

  	    if (info.done) {
  	      // Assign the result of the finished delegate to the temporary
  	      // variable specified by delegate.resultName (see delegateYield).
  	      context[delegate.resultName] = info.value;

  	      // Resume execution at the desired location (see delegateYield).
  	      context.next = delegate.nextLoc;

  	      // If context.method was "throw" but the delegate handled the
  	      // exception, let the outer generator proceed normally. If
  	      // context.method was "next", forget context.arg since it has been
  	      // "consumed" by the delegate iterator. If context.method was
  	      // "return", allow the original .return call to continue in the
  	      // outer generator.
  	      if (context.method !== "return") {
  	        context.method = "next";
  	        context.arg = undefined$1;
  	      }

  	    } else {
  	      // Re-yield the result returned by the delegate method.
  	      return info;
  	    }

  	    // The delegate iterator is finished, so forget it and continue with
  	    // the outer generator.
  	    context.delegate = null;
  	    return ContinueSentinel;
  	  }

  	  // Define Generator.prototype.{next,throw,return} in terms of the
  	  // unified ._invoke helper method.
  	  defineIteratorMethods(Gp);

  	  define(Gp, toStringTagSymbol, "Generator");

  	  // A Generator should always return itself as the iterator object when the
  	  // @@iterator function is called on it. Some browsers' implementations of the
  	  // iterator prototype chain incorrectly implement this, causing the Generator
  	  // object to not be returned from this call. This ensures that doesn't happen.
  	  // See https://github.com/facebook/regenerator/issues/274 for more details.
  	  define(Gp, iteratorSymbol, function() {
  	    return this;
  	  });

  	  define(Gp, "toString", function() {
  	    return "[object Generator]";
  	  });

  	  function pushTryEntry(locs) {
  	    var entry = { tryLoc: locs[0] };

  	    if (1 in locs) {
  	      entry.catchLoc = locs[1];
  	    }

  	    if (2 in locs) {
  	      entry.finallyLoc = locs[2];
  	      entry.afterLoc = locs[3];
  	    }

  	    this.tryEntries.push(entry);
  	  }

  	  function resetTryEntry(entry) {
  	    var record = entry.completion || {};
  	    record.type = "normal";
  	    delete record.arg;
  	    entry.completion = record;
  	  }

  	  function Context(tryLocsList) {
  	    // The root entry object (effectively a try statement without a catch
  	    // or a finally block) gives us a place to store values thrown from
  	    // locations where there is no enclosing try statement.
  	    this.tryEntries = [{ tryLoc: "root" }];
  	    tryLocsList.forEach(pushTryEntry, this);
  	    this.reset(true);
  	  }

  	  exports.keys = function(object) {
  	    var keys = [];
  	    for (var key in object) {
  	      keys.push(key);
  	    }
  	    keys.reverse();

  	    // Rather than returning an object with a next method, we keep
  	    // things simple and return the next function itself.
  	    return function next() {
  	      while (keys.length) {
  	        var key = keys.pop();
  	        if (key in object) {
  	          next.value = key;
  	          next.done = false;
  	          return next;
  	        }
  	      }

  	      // To avoid creating an additional object, we just hang the .value
  	      // and .done properties off the next function object itself. This
  	      // also ensures that the minifier will not anonymize the function.
  	      next.done = true;
  	      return next;
  	    };
  	  };

  	  function values(iterable) {
  	    if (iterable) {
  	      var iteratorMethod = iterable[iteratorSymbol];
  	      if (iteratorMethod) {
  	        return iteratorMethod.call(iterable);
  	      }

  	      if (typeof iterable.next === "function") {
  	        return iterable;
  	      }

  	      if (!isNaN(iterable.length)) {
  	        var i = -1, next = function next() {
  	          while (++i < iterable.length) {
  	            if (hasOwn.call(iterable, i)) {
  	              next.value = iterable[i];
  	              next.done = false;
  	              return next;
  	            }
  	          }

  	          next.value = undefined$1;
  	          next.done = true;

  	          return next;
  	        };

  	        return next.next = next;
  	      }
  	    }

  	    // Return an iterator with no values.
  	    return { next: doneResult };
  	  }
  	  exports.values = values;

  	  function doneResult() {
  	    return { value: undefined$1, done: true };
  	  }

  	  Context.prototype = {
  	    constructor: Context,

  	    reset: function(skipTempReset) {
  	      this.prev = 0;
  	      this.next = 0;
  	      // Resetting context._sent for legacy support of Babel's
  	      // function.sent implementation.
  	      this.sent = this._sent = undefined$1;
  	      this.done = false;
  	      this.delegate = null;

  	      this.method = "next";
  	      this.arg = undefined$1;

  	      this.tryEntries.forEach(resetTryEntry);

  	      if (!skipTempReset) {
  	        for (var name in this) {
  	          // Not sure about the optimal order of these conditions:
  	          if (name.charAt(0) === "t" &&
  	              hasOwn.call(this, name) &&
  	              !isNaN(+name.slice(1))) {
  	            this[name] = undefined$1;
  	          }
  	        }
  	      }
  	    },

  	    stop: function() {
  	      this.done = true;

  	      var rootEntry = this.tryEntries[0];
  	      var rootRecord = rootEntry.completion;
  	      if (rootRecord.type === "throw") {
  	        throw rootRecord.arg;
  	      }

  	      return this.rval;
  	    },

  	    dispatchException: function(exception) {
  	      if (this.done) {
  	        throw exception;
  	      }

  	      var context = this;
  	      function handle(loc, caught) {
  	        record.type = "throw";
  	        record.arg = exception;
  	        context.next = loc;

  	        if (caught) {
  	          // If the dispatched exception was caught by a catch block,
  	          // then let that catch block handle the exception normally.
  	          context.method = "next";
  	          context.arg = undefined$1;
  	        }

  	        return !! caught;
  	      }

  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        var record = entry.completion;

  	        if (entry.tryLoc === "root") {
  	          // Exception thrown outside of any try block that could handle
  	          // it, so set the completion value of the entire function to
  	          // throw the exception.
  	          return handle("end");
  	        }

  	        if (entry.tryLoc <= this.prev) {
  	          var hasCatch = hasOwn.call(entry, "catchLoc");
  	          var hasFinally = hasOwn.call(entry, "finallyLoc");

  	          if (hasCatch && hasFinally) {
  	            if (this.prev < entry.catchLoc) {
  	              return handle(entry.catchLoc, true);
  	            } else if (this.prev < entry.finallyLoc) {
  	              return handle(entry.finallyLoc);
  	            }

  	          } else if (hasCatch) {
  	            if (this.prev < entry.catchLoc) {
  	              return handle(entry.catchLoc, true);
  	            }

  	          } else if (hasFinally) {
  	            if (this.prev < entry.finallyLoc) {
  	              return handle(entry.finallyLoc);
  	            }

  	          } else {
  	            throw new Error("try statement without catch or finally");
  	          }
  	        }
  	      }
  	    },

  	    abrupt: function(type, arg) {
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        if (entry.tryLoc <= this.prev &&
  	            hasOwn.call(entry, "finallyLoc") &&
  	            this.prev < entry.finallyLoc) {
  	          var finallyEntry = entry;
  	          break;
  	        }
  	      }

  	      if (finallyEntry &&
  	          (type === "break" ||
  	           type === "continue") &&
  	          finallyEntry.tryLoc <= arg &&
  	          arg <= finallyEntry.finallyLoc) {
  	        // Ignore the finally entry if control is not jumping to a
  	        // location outside the try/catch block.
  	        finallyEntry = null;
  	      }

  	      var record = finallyEntry ? finallyEntry.completion : {};
  	      record.type = type;
  	      record.arg = arg;

  	      if (finallyEntry) {
  	        this.method = "next";
  	        this.next = finallyEntry.finallyLoc;
  	        return ContinueSentinel;
  	      }

  	      return this.complete(record);
  	    },

  	    complete: function(record, afterLoc) {
  	      if (record.type === "throw") {
  	        throw record.arg;
  	      }

  	      if (record.type === "break" ||
  	          record.type === "continue") {
  	        this.next = record.arg;
  	      } else if (record.type === "return") {
  	        this.rval = this.arg = record.arg;
  	        this.method = "return";
  	        this.next = "end";
  	      } else if (record.type === "normal" && afterLoc) {
  	        this.next = afterLoc;
  	      }

  	      return ContinueSentinel;
  	    },

  	    finish: function(finallyLoc) {
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        if (entry.finallyLoc === finallyLoc) {
  	          this.complete(entry.completion, entry.afterLoc);
  	          resetTryEntry(entry);
  	          return ContinueSentinel;
  	        }
  	      }
  	    },

  	    "catch": function(tryLoc) {
  	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
  	        var entry = this.tryEntries[i];
  	        if (entry.tryLoc === tryLoc) {
  	          var record = entry.completion;
  	          if (record.type === "throw") {
  	            var thrown = record.arg;
  	            resetTryEntry(entry);
  	          }
  	          return thrown;
  	        }
  	      }

  	      // The context.catch method must only be called with a location
  	      // argument that corresponds to a known catch block.
  	      throw new Error("illegal catch attempt");
  	    },

  	    delegateYield: function(iterable, resultName, nextLoc) {
  	      this.delegate = {
  	        iterator: values(iterable),
  	        resultName: resultName,
  	        nextLoc: nextLoc
  	      };

  	      if (this.method === "next") {
  	        // Deliberately forget the last sent value so that we don't
  	        // accidentally pass it on to the delegate.
  	        this.arg = undefined$1;
  	      }

  	      return ContinueSentinel;
  	    }
  	  };

  	  // Regardless of whether this script is executing as a CommonJS module
  	  // or not, return the runtime object so that we can declare the variable
  	  // regeneratorRuntime in the outer scope, which allows this module to be
  	  // injected easily by `bin/regenerator --include-runtime script.js`.
  	  return exports;

  	}(
  	  // If this script is executing as a CommonJS module, use module.exports
  	  // as the regeneratorRuntime namespace. Otherwise create a new empty
  	  // object. Either way, the resulting object will be used to initialize
  	  // the regeneratorRuntime variable at the top of this file.
  	  module.exports 
  	));

  	try {
  	  regeneratorRuntime = runtime;
  	} catch (accidentalStrictMode) {
  	  // This module should not be running in strict mode, so the above
  	  // assignment should always work unless something is misconfigured. Just
  	  // in case runtime.js accidentally runs in strict mode, in modern engines
  	  // we can explicitly access globalThis. In older engines we can escape
  	  // strict mode using a global Function call. This could conceivably fail
  	  // if a Content Security Policy forbids using Function, but in that case
  	  // the proper solution is to fix the accidental strict mode problem. If
  	  // you've misconfigured your bundler to force strict mode and applied a
  	  // CSP to forbid Function, and you're not willing to fix either of those
  	  // problems, please detail your unique predicament in a GitHub issue.
  	  if (typeof globalThis === "object") {
  	    globalThis.regeneratorRuntime = runtime;
  	  } else {
  	    Function("r", "regeneratorRuntime = r")(runtime);
  	  }
  	}
  } (runtime));

  (function (module) {
  	module.exports = runtime.exports;
  } (regenerator));

  var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator.exports);

  var axios$2 = {exports: {}};

  var axios$1 = {exports: {}};

  var bind$2 = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };

  var bind$1 = bind$2;

  // utils is a library of generic helper functions non-specific to axios

  var toString = Object.prototype.toString;

  // eslint-disable-next-line func-names
  var kindOf = (function(cache) {
    // eslint-disable-next-line func-names
    return function(thing) {
      var str = toString.call(thing);
      return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
    };
  })(Object.create(null));

  function kindOfTest(type) {
    type = type.toLowerCase();
    return function isKindOf(thing) {
      return kindOf(thing) === type;
    };
  }

  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray$1(val) {
    return Array.isArray(val);
  }

  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }

  /**
   * Determine if a value is an ArrayBuffer
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  var isArrayBuffer = kindOfTest('ArrayBuffer');


  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
    }
    return result;
  }

  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString$1(val) {
    return typeof val === 'string';
  }

  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }

  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject$1(val) {
    return val !== null && typeof val === 'object';
  }

  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
  function isPlainObject(val) {
    if (kindOf(val) !== 'object') {
      return false;
    }

    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }

  /**
   * Determine if a value is a Date
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  var isDate = kindOfTest('Date');

  /**
   * Determine if a value is a File
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFile = kindOfTest('File');

  /**
   * Determine if a value is a Blob
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  var isBlob = kindOfTest('Blob');

  /**
   * Determine if a value is a FileList
   *
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  var isFileList = kindOfTest('FileList');

  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction$1(val) {
    return toString.call(val) === '[object Function]';
  }

  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject$1(val) && isFunction$1(val.pipe);
  }

  /**
   * Determine if a value is a FormData
   *
   * @param {Object} thing The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(thing) {
    var pattern = '[object FormData]';
    return thing && (
      (typeof FormData === 'function' && thing instanceof FormData) ||
      toString.call(thing) === pattern ||
      (isFunction$1(thing.toString) && thing.toString() === pattern)
    );
  }

  /**
   * Determine if a value is a URLSearchParams object
   * @function
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  var isURLSearchParams = kindOfTest('URLSearchParams');

  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }

  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }

  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray$1(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }

  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray$1(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }

  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend$1(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind$1(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }

  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  }

  /**
   * Inherit the prototype methods from one constructor into another
   * @param {function} constructor
   * @param {function} superConstructor
   * @param {object} [props]
   * @param {object} [descriptors]
   */

  function inherits(constructor, superConstructor, props, descriptors) {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    props && Object.assign(constructor.prototype, props);
  }

  /**
   * Resolve object with deep prototype chain to a flat object
   * @param {Object} sourceObj source object
   * @param {Object} [destObj]
   * @param {Function} [filter]
   * @returns {Object}
   */

  function toFlatObject(sourceObj, destObj, filter) {
    var props;
    var i;
    var prop;
    var merged = {};

    destObj = destObj || {};

    do {
      props = Object.getOwnPropertyNames(sourceObj);
      i = props.length;
      while (i-- > 0) {
        prop = props[i];
        if (!merged[prop]) {
          destObj[prop] = sourceObj[prop];
          merged[prop] = true;
        }
      }
      sourceObj = Object.getPrototypeOf(sourceObj);
    } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

    return destObj;
  }

  /*
   * determines whether a string ends with the characters of a specified string
   * @param {String} str
   * @param {String} searchString
   * @param {Number} [position= 0]
   * @returns {boolean}
   */
  function endsWith(str, searchString, position) {
    str = String(str);
    if (position === undefined || position > str.length) {
      position = str.length;
    }
    position -= searchString.length;
    var lastIndex = str.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  }


  /**
   * Returns new array from array like object
   * @param {*} [thing]
   * @returns {Array}
   */
  function toArray(thing) {
    if (!thing) return null;
    var i = thing.length;
    if (isUndefined(i)) return null;
    var arr = new Array(i);
    while (i-- > 0) {
      arr[i] = thing[i];
    }
    return arr;
  }

  // eslint-disable-next-line func-names
  var isTypedArray = (function(TypedArray) {
    // eslint-disable-next-line func-names
    return function(thing) {
      return TypedArray && thing instanceof TypedArray;
    };
  })(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

  var utils$9 = {
    isArray: isArray$1,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString$1,
    isNumber: isNumber,
    isObject: isObject$1,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction$1,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend$1,
    trim: trim,
    stripBOM: stripBOM,
    inherits: inherits,
    toFlatObject: toFlatObject,
    kindOf: kindOf,
    kindOfTest: kindOfTest,
    endsWith: endsWith,
    toArray: toArray,
    isTypedArray: isTypedArray,
    isFileList: isFileList
  };

  var utils$8 = utils$9;

  function encode(val) {
    return encodeURIComponent(val).
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }

  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  var buildURL$1 = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$8.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];

      utils$8.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils$8.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils$8.forEach(val, function parseValue(v) {
          if (utils$8.isDate(v)) {
            v = v.toISOString();
          } else if (utils$8.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });

      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  var utils$7 = utils$9;

  function InterceptorManager$1() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager$1.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager$1.prototype.forEach = function forEach(fn) {
    utils$7.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager$1;

  var utils$6 = utils$9;

  var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
    utils$6.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };

  var AxiosError_1;
  var hasRequiredAxiosError;

  function requireAxiosError () {
  	if (hasRequiredAxiosError) return AxiosError_1;
  	hasRequiredAxiosError = 1;

  	var utils = utils$9;

  	/**
  	 * Create an Error with the specified message, config, error code, request and response.
  	 *
  	 * @param {string} message The error message.
  	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
  	 * @param {Object} [config] The config.
  	 * @param {Object} [request] The request.
  	 * @param {Object} [response] The response.
  	 * @returns {Error} The created error.
  	 */
  	function AxiosError(message, code, config, request, response) {
  	  Error.call(this);
  	  this.message = message;
  	  this.name = 'AxiosError';
  	  code && (this.code = code);
  	  config && (this.config = config);
  	  request && (this.request = request);
  	  response && (this.response = response);
  	}

  	utils.inherits(AxiosError, Error, {
  	  toJSON: function toJSON() {
  	    return {
  	      // Standard
  	      message: this.message,
  	      name: this.name,
  	      // Microsoft
  	      description: this.description,
  	      number: this.number,
  	      // Mozilla
  	      fileName: this.fileName,
  	      lineNumber: this.lineNumber,
  	      columnNumber: this.columnNumber,
  	      stack: this.stack,
  	      // Axios
  	      config: this.config,
  	      code: this.code,
  	      status: this.response && this.response.status ? this.response.status : null
  	    };
  	  }
  	});

  	var prototype = AxiosError.prototype;
  	var descriptors = {};

  	[
  	  'ERR_BAD_OPTION_VALUE',
  	  'ERR_BAD_OPTION',
  	  'ECONNABORTED',
  	  'ETIMEDOUT',
  	  'ERR_NETWORK',
  	  'ERR_FR_TOO_MANY_REDIRECTS',
  	  'ERR_DEPRECATED',
  	  'ERR_BAD_RESPONSE',
  	  'ERR_BAD_REQUEST',
  	  'ERR_CANCELED'
  	// eslint-disable-next-line func-names
  	].forEach(function(code) {
  	  descriptors[code] = {value: code};
  	});

  	Object.defineProperties(AxiosError, descriptors);
  	Object.defineProperty(prototype, 'isAxiosError', {value: true});

  	// eslint-disable-next-line func-names
  	AxiosError.from = function(error, code, config, request, response, customProps) {
  	  var axiosError = Object.create(prototype);

  	  utils.toFlatObject(error, axiosError, function filter(obj) {
  	    return obj !== Error.prototype;
  	  });

  	  AxiosError.call(axiosError, error.message, code, config, request, response);

  	  axiosError.name = error.name;

  	  customProps && Object.assign(axiosError, customProps);

  	  return axiosError;
  	};

  	AxiosError_1 = AxiosError;
  	return AxiosError_1;
  }

  var transitional = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  };

  var toFormData_1;
  var hasRequiredToFormData;

  function requireToFormData () {
  	if (hasRequiredToFormData) return toFormData_1;
  	hasRequiredToFormData = 1;

  	var utils = utils$9;

  	/**
  	 * Convert a data object to FormData
  	 * @param {Object} obj
  	 * @param {?Object} [formData]
  	 * @returns {Object}
  	 **/

  	function toFormData(obj, formData) {
  	  // eslint-disable-next-line no-param-reassign
  	  formData = formData || new FormData();

  	  var stack = [];

  	  function convertValue(value) {
  	    if (value === null) return '';

  	    if (utils.isDate(value)) {
  	      return value.toISOString();
  	    }

  	    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
  	      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
  	    }

  	    return value;
  	  }

  	  function build(data, parentKey) {
  	    if (utils.isPlainObject(data) || utils.isArray(data)) {
  	      if (stack.indexOf(data) !== -1) {
  	        throw Error('Circular reference detected in ' + parentKey);
  	      }

  	      stack.push(data);

  	      utils.forEach(data, function each(value, key) {
  	        if (utils.isUndefined(value)) return;
  	        var fullKey = parentKey ? parentKey + '.' + key : key;
  	        var arr;

  	        if (value && !parentKey && typeof value === 'object') {
  	          if (utils.endsWith(key, '{}')) {
  	            // eslint-disable-next-line no-param-reassign
  	            value = JSON.stringify(value);
  	          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
  	            // eslint-disable-next-line func-names
  	            arr.forEach(function(el) {
  	              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
  	            });
  	            return;
  	          }
  	        }

  	        build(value, fullKey);
  	      });

  	      stack.pop();
  	    } else {
  	      formData.append(parentKey, convertValue(data));
  	    }
  	  }

  	  build(obj);

  	  return formData;
  	}

  	toFormData_1 = toFormData;
  	return toFormData_1;
  }

  var settle;
  var hasRequiredSettle;

  function requireSettle () {
  	if (hasRequiredSettle) return settle;
  	hasRequiredSettle = 1;

  	var AxiosError = requireAxiosError();

  	/**
  	 * Resolve or reject a Promise based on response status.
  	 *
  	 * @param {Function} resolve A function that resolves the promise.
  	 * @param {Function} reject A function that rejects the promise.
  	 * @param {object} response The response.
  	 */
  	settle = function settle(resolve, reject, response) {
  	  var validateStatus = response.config.validateStatus;
  	  if (!response.status || !validateStatus || validateStatus(response.status)) {
  	    resolve(response);
  	  } else {
  	    reject(new AxiosError(
  	      'Request failed with status code ' + response.status,
  	      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
  	      response.config,
  	      response.request,
  	      response
  	    ));
  	  }
  	};
  	return settle;
  }

  var cookies;
  var hasRequiredCookies;

  function requireCookies () {
  	if (hasRequiredCookies) return cookies;
  	hasRequiredCookies = 1;

  	var utils = utils$9;

  	cookies = (
  	  utils.isStandardBrowserEnv() ?

  	  // Standard browser envs support document.cookie
  	    (function standardBrowserEnv() {
  	      return {
  	        write: function write(name, value, expires, path, domain, secure) {
  	          var cookie = [];
  	          cookie.push(name + '=' + encodeURIComponent(value));

  	          if (utils.isNumber(expires)) {
  	            cookie.push('expires=' + new Date(expires).toGMTString());
  	          }

  	          if (utils.isString(path)) {
  	            cookie.push('path=' + path);
  	          }

  	          if (utils.isString(domain)) {
  	            cookie.push('domain=' + domain);
  	          }

  	          if (secure === true) {
  	            cookie.push('secure');
  	          }

  	          document.cookie = cookie.join('; ');
  	        },

  	        read: function read(name) {
  	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  	          return (match ? decodeURIComponent(match[3]) : null);
  	        },

  	        remove: function remove(name) {
  	          this.write(name, '', Date.now() - 86400000);
  	        }
  	      };
  	    })() :

  	  // Non standard browser env (web workers, react-native) lack needed support.
  	    (function nonStandardBrowserEnv() {
  	      return {
  	        write: function write() {},
  	        read: function read() { return null; },
  	        remove: function remove() {}
  	      };
  	    })()
  	);
  	return cookies;
  }

  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  var isAbsoluteURL$1 = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
  };

  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };

  var isAbsoluteURL = isAbsoluteURL$1;
  var combineURLs = combineURLs$1;

  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };

  var parseHeaders;
  var hasRequiredParseHeaders;

  function requireParseHeaders () {
  	if (hasRequiredParseHeaders) return parseHeaders;
  	hasRequiredParseHeaders = 1;

  	var utils = utils$9;

  	// Headers whose duplicates are ignored by node
  	// c.f. https://nodejs.org/api/http.html#http_message_headers
  	var ignoreDuplicateOf = [
  	  'age', 'authorization', 'content-length', 'content-type', 'etag',
  	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  	  'referer', 'retry-after', 'user-agent'
  	];

  	/**
  	 * Parse headers into an object
  	 *
  	 * ```
  	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
  	 * Content-Type: application/json
  	 * Connection: keep-alive
  	 * Transfer-Encoding: chunked
  	 * ```
  	 *
  	 * @param {String} headers Headers needing to be parsed
  	 * @returns {Object} Headers parsed into an object
  	 */
  	parseHeaders = function parseHeaders(headers) {
  	  var parsed = {};
  	  var key;
  	  var val;
  	  var i;

  	  if (!headers) { return parsed; }

  	  utils.forEach(headers.split('\n'), function parser(line) {
  	    i = line.indexOf(':');
  	    key = utils.trim(line.substr(0, i)).toLowerCase();
  	    val = utils.trim(line.substr(i + 1));

  	    if (key) {
  	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
  	        return;
  	      }
  	      if (key === 'set-cookie') {
  	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
  	      } else {
  	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
  	      }
  	    }
  	  });

  	  return parsed;
  	};
  	return parseHeaders;
  }

  var isURLSameOrigin;
  var hasRequiredIsURLSameOrigin;

  function requireIsURLSameOrigin () {
  	if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
  	hasRequiredIsURLSameOrigin = 1;

  	var utils = utils$9;

  	isURLSameOrigin = (
  	  utils.isStandardBrowserEnv() ?

  	  // Standard browser envs have full support of the APIs needed to test
  	  // whether the request URL is of the same origin as current location.
  	    (function standardBrowserEnv() {
  	      var msie = /(msie|trident)/i.test(navigator.userAgent);
  	      var urlParsingNode = document.createElement('a');
  	      var originURL;

  	      /**
  	    * Parse a URL to discover it's components
  	    *
  	    * @param {String} url The URL to be parsed
  	    * @returns {Object}
  	    */
  	      function resolveURL(url) {
  	        var href = url;

  	        if (msie) {
  	        // IE needs attribute set twice to normalize properties
  	          urlParsingNode.setAttribute('href', href);
  	          href = urlParsingNode.href;
  	        }

  	        urlParsingNode.setAttribute('href', href);

  	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  	        return {
  	          href: urlParsingNode.href,
  	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
  	          host: urlParsingNode.host,
  	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
  	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
  	          hostname: urlParsingNode.hostname,
  	          port: urlParsingNode.port,
  	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
  	            urlParsingNode.pathname :
  	            '/' + urlParsingNode.pathname
  	        };
  	      }

  	      originURL = resolveURL(window.location.href);

  	      /**
  	    * Determine if a URL shares the same origin as the current location
  	    *
  	    * @param {String} requestURL The URL to test
  	    * @returns {boolean} True if URL shares the same origin, otherwise false
  	    */
  	      return function isURLSameOrigin(requestURL) {
  	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
  	        return (parsed.protocol === originURL.protocol &&
  	            parsed.host === originURL.host);
  	      };
  	    })() :

  	  // Non standard browser envs (web workers, react-native) lack needed support.
  	    (function nonStandardBrowserEnv() {
  	      return function isURLSameOrigin() {
  	        return true;
  	      };
  	    })()
  	);
  	return isURLSameOrigin;
  }

  var CanceledError_1;
  var hasRequiredCanceledError;

  function requireCanceledError () {
  	if (hasRequiredCanceledError) return CanceledError_1;
  	hasRequiredCanceledError = 1;

  	var AxiosError = requireAxiosError();
  	var utils = utils$9;

  	/**
  	 * A `CanceledError` is an object that is thrown when an operation is canceled.
  	 *
  	 * @class
  	 * @param {string=} message The message.
  	 */
  	function CanceledError(message) {
  	  // eslint-disable-next-line no-eq-null,eqeqeq
  	  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  	  this.name = 'CanceledError';
  	}

  	utils.inherits(CanceledError, AxiosError, {
  	  __CANCEL__: true
  	});

  	CanceledError_1 = CanceledError;
  	return CanceledError_1;
  }

  var parseProtocol;
  var hasRequiredParseProtocol;

  function requireParseProtocol () {
  	if (hasRequiredParseProtocol) return parseProtocol;
  	hasRequiredParseProtocol = 1;

  	parseProtocol = function parseProtocol(url) {
  	  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  	  return match && match[1] || '';
  	};
  	return parseProtocol;
  }

  var xhr;
  var hasRequiredXhr;

  function requireXhr () {
  	if (hasRequiredXhr) return xhr;
  	hasRequiredXhr = 1;

  	var utils = utils$9;
  	var settle = requireSettle();
  	var cookies = requireCookies();
  	var buildURL = buildURL$1;
  	var buildFullPath = buildFullPath$1;
  	var parseHeaders = requireParseHeaders();
  	var isURLSameOrigin = requireIsURLSameOrigin();
  	var transitionalDefaults = transitional;
  	var AxiosError = requireAxiosError();
  	var CanceledError = requireCanceledError();
  	var parseProtocol = requireParseProtocol();

  	xhr = function xhrAdapter(config) {
  	  return new Promise(function dispatchXhrRequest(resolve, reject) {
  	    var requestData = config.data;
  	    var requestHeaders = config.headers;
  	    var responseType = config.responseType;
  	    var onCanceled;
  	    function done() {
  	      if (config.cancelToken) {
  	        config.cancelToken.unsubscribe(onCanceled);
  	      }

  	      if (config.signal) {
  	        config.signal.removeEventListener('abort', onCanceled);
  	      }
  	    }

  	    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
  	      delete requestHeaders['Content-Type']; // Let the browser set it
  	    }

  	    var request = new XMLHttpRequest();

  	    // HTTP basic authentication
  	    if (config.auth) {
  	      var username = config.auth.username || '';
  	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
  	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
  	    }

  	    var fullPath = buildFullPath(config.baseURL, config.url);

  	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

  	    // Set the request timeout in MS
  	    request.timeout = config.timeout;

  	    function onloadend() {
  	      if (!request) {
  	        return;
  	      }
  	      // Prepare the response
  	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
  	      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
  	        request.responseText : request.response;
  	      var response = {
  	        data: responseData,
  	        status: request.status,
  	        statusText: request.statusText,
  	        headers: responseHeaders,
  	        config: config,
  	        request: request
  	      };

  	      settle(function _resolve(value) {
  	        resolve(value);
  	        done();
  	      }, function _reject(err) {
  	        reject(err);
  	        done();
  	      }, response);

  	      // Clean up request
  	      request = null;
  	    }

  	    if ('onloadend' in request) {
  	      // Use onloadend if available
  	      request.onloadend = onloadend;
  	    } else {
  	      // Listen for ready state to emulate onloadend
  	      request.onreadystatechange = function handleLoad() {
  	        if (!request || request.readyState !== 4) {
  	          return;
  	        }

  	        // The request errored out and we didn't get a response, this will be
  	        // handled by onerror instead
  	        // With one exception: request that using file: protocol, most browsers
  	        // will return status as 0 even though it's a successful request
  	        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
  	          return;
  	        }
  	        // readystate handler is calling before onerror or ontimeout handlers,
  	        // so we should call onloadend on the next 'tick'
  	        setTimeout(onloadend);
  	      };
  	    }

  	    // Handle browser request cancellation (as opposed to a manual cancellation)
  	    request.onabort = function handleAbort() {
  	      if (!request) {
  	        return;
  	      }

  	      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

  	      // Clean up request
  	      request = null;
  	    };

  	    // Handle low level network errors
  	    request.onerror = function handleError() {
  	      // Real errors are hidden from us by the browser
  	      // onerror should only fire if it's a network error
  	      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

  	      // Clean up request
  	      request = null;
  	    };

  	    // Handle timeout
  	    request.ontimeout = function handleTimeout() {
  	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
  	      var transitional = config.transitional || transitionalDefaults;
  	      if (config.timeoutErrorMessage) {
  	        timeoutErrorMessage = config.timeoutErrorMessage;
  	      }
  	      reject(new AxiosError(
  	        timeoutErrorMessage,
  	        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
  	        config,
  	        request));

  	      // Clean up request
  	      request = null;
  	    };

  	    // Add xsrf header
  	    // This is only done if running in a standard browser environment.
  	    // Specifically not if we're in a web worker, or react-native.
  	    if (utils.isStandardBrowserEnv()) {
  	      // Add xsrf header
  	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
  	        cookies.read(config.xsrfCookieName) :
  	        undefined;

  	      if (xsrfValue) {
  	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
  	      }
  	    }

  	    // Add headers to the request
  	    if ('setRequestHeader' in request) {
  	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
  	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
  	          // Remove Content-Type if data is undefined
  	          delete requestHeaders[key];
  	        } else {
  	          // Otherwise add header to the request
  	          request.setRequestHeader(key, val);
  	        }
  	      });
  	    }

  	    // Add withCredentials to request if needed
  	    if (!utils.isUndefined(config.withCredentials)) {
  	      request.withCredentials = !!config.withCredentials;
  	    }

  	    // Add responseType to request if needed
  	    if (responseType && responseType !== 'json') {
  	      request.responseType = config.responseType;
  	    }

  	    // Handle progress if needed
  	    if (typeof config.onDownloadProgress === 'function') {
  	      request.addEventListener('progress', config.onDownloadProgress);
  	    }

  	    // Not all browsers support upload events
  	    if (typeof config.onUploadProgress === 'function' && request.upload) {
  	      request.upload.addEventListener('progress', config.onUploadProgress);
  	    }

  	    if (config.cancelToken || config.signal) {
  	      // Handle cancellation
  	      // eslint-disable-next-line func-names
  	      onCanceled = function(cancel) {
  	        if (!request) {
  	          return;
  	        }
  	        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
  	        request.abort();
  	        request = null;
  	      };

  	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
  	      if (config.signal) {
  	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
  	      }
  	    }

  	    if (!requestData) {
  	      requestData = null;
  	    }

  	    var protocol = parseProtocol(fullPath);

  	    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
  	      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
  	      return;
  	    }


  	    // Send the request
  	    request.send(requestData);
  	  });
  	};
  	return xhr;
  }

  var _null;
  var hasRequired_null;

  function require_null () {
  	if (hasRequired_null) return _null;
  	hasRequired_null = 1;
  	// eslint-disable-next-line strict
  	_null = null;
  	return _null;
  }

  var utils$5 = utils$9;
  var normalizeHeaderName = normalizeHeaderName$1;
  var AxiosError$1 = requireAxiosError();
  var transitionalDefaults = transitional;
  var toFormData = requireToFormData();

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = requireXhr();
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = requireXhr();
    }
    return adapter;
  }

  function stringifySafely(rawValue, parser, encoder) {
    if (utils$5.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils$5.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }

    return (encoder || JSON.stringify)(rawValue);
  }

  var defaults$3 = {

    transitional: transitionalDefaults,

    adapter: getDefaultAdapter(),

    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');

      if (utils$5.isFormData(data) ||
        utils$5.isArrayBuffer(data) ||
        utils$5.isBuffer(data) ||
        utils$5.isStream(data) ||
        utils$5.isFile(data) ||
        utils$5.isBlob(data)
      ) {
        return data;
      }
      if (utils$5.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$5.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }

      var isObjectPayload = utils$5.isObject(data);
      var contentType = headers && headers['Content-Type'];

      var isFileList;

      if ((isFileList = utils$5.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
        var _FormData = this.env && this.env.FormData;
        return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
      } else if (isObjectPayload || contentType === 'application/json') {
        setContentTypeIfUnset(headers, 'application/json');
        return stringifySafely(data);
      }

      return data;
    }],

    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional || defaults$3.transitional;
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

      if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }

      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,

    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',

    maxContentLength: -1,
    maxBodyLength: -1,

    env: {
      FormData: require_null()
    },

    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },

    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  };

  utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults$3.headers[method] = {};
  });

  utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
  });

  var defaults_1 = defaults$3;

  var utils$4 = utils$9;
  var defaults$2 = defaults_1;

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  var transformData$1 = function transformData(data, headers, fns) {
    var context = this || defaults$2;
    /*eslint no-param-reassign:0*/
    utils$4.forEach(fns, function transform(fn) {
      data = fn.call(context, data, headers);
    });

    return data;
  };

  var isCancel$1;
  var hasRequiredIsCancel;

  function requireIsCancel () {
  	if (hasRequiredIsCancel) return isCancel$1;
  	hasRequiredIsCancel = 1;

  	isCancel$1 = function isCancel(value) {
  	  return !!(value && value.__CANCEL__);
  	};
  	return isCancel$1;
  }

  var utils$3 = utils$9;
  var transformData = transformData$1;
  var isCancel = requireIsCancel();
  var defaults$1 = defaults_1;
  var CanceledError = requireCanceledError();

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }

    if (config.signal && config.signal.aborted) {
      throw new CanceledError();
    }
  }

  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  var dispatchRequest$1 = function dispatchRequest(config) {
    throwIfCancellationRequested(config);

    // Ensure headers exist
    config.headers = config.headers || {};

    // Transform request data
    config.data = transformData.call(
      config,
      config.data,
      config.headers,
      config.transformRequest
    );

    // Flatten headers
    config.headers = utils$3.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );

    utils$3.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );

    var adapter = config.adapter || defaults$1.adapter;

    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);

      // Transform response data
      response.data = transformData.call(
        config,
        response.data,
        response.headers,
        config.transformResponse
      );

      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);

        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config,
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }

      return Promise.reject(reason);
    });
  };

  var utils$2 = utils$9;

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  var mergeConfig$2 = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};

    function getMergedValue(target, source) {
      if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
        return utils$2.merge(target, source);
      } else if (utils$2.isPlainObject(source)) {
        return utils$2.merge({}, source);
      } else if (utils$2.isArray(source)) {
        return source.slice();
      }
      return source;
    }

    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        return getMergedValue(undefined, config1[prop]);
      }
    }

    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        return getMergedValue(undefined, config2[prop]);
      }
    }

    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        return getMergedValue(undefined, config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        return getMergedValue(undefined, config1[prop]);
      }
    }

    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(undefined, config1[prop]);
      }
    }

    var mergeMap = {
      'url': valueFromConfig2,
      'method': valueFromConfig2,
      'data': valueFromConfig2,
      'baseURL': defaultToConfig2,
      'transformRequest': defaultToConfig2,
      'transformResponse': defaultToConfig2,
      'paramsSerializer': defaultToConfig2,
      'timeout': defaultToConfig2,
      'timeoutMessage': defaultToConfig2,
      'withCredentials': defaultToConfig2,
      'adapter': defaultToConfig2,
      'responseType': defaultToConfig2,
      'xsrfCookieName': defaultToConfig2,
      'xsrfHeaderName': defaultToConfig2,
      'onUploadProgress': defaultToConfig2,
      'onDownloadProgress': defaultToConfig2,
      'decompress': defaultToConfig2,
      'maxContentLength': defaultToConfig2,
      'maxBodyLength': defaultToConfig2,
      'beforeRedirect': defaultToConfig2,
      'transport': defaultToConfig2,
      'httpAgent': defaultToConfig2,
      'httpsAgent': defaultToConfig2,
      'cancelToken': defaultToConfig2,
      'socketPath': defaultToConfig2,
      'responseEncoding': defaultToConfig2,
      'validateStatus': mergeDirectKeys
    };

    utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(prop);
      (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
    });

    return config;
  };

  var data;
  var hasRequiredData;

  function requireData () {
  	if (hasRequiredData) return data;
  	hasRequiredData = 1;
  	data = {
  	  "version": "0.27.2"
  	};
  	return data;
  }

  var VERSION = requireData().version;
  var AxiosError = requireAxiosError();

  var validators$1 = {};

  // eslint-disable-next-line func-names
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
    validators$1[type] = function validator(thing) {
      return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });

  var deprecatedWarnings = {};

  /**
   * Transitional option validator
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   * @returns {function}
   */
  validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    }

    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
      if (validator === false) {
        throw new AxiosError(
          formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
          AxiosError.ERR_DEPRECATED
        );
      }

      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true;
        // eslint-disable-next-line no-console
        console.warn(
          formatMessage(
            opt,
            ' has been deprecated since v' + version + ' and will be removed in the near future'
          )
        );
      }

      return validator ? validator(value, opt, opts) : true;
    };
  };

  /**
   * Assert object's properties type
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   */

  function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== 'object') {
      throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
    }
    var keys = Object.keys(options);
    var i = keys.length;
    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];
      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);
        if (result !== true) {
          throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
        }
        continue;
      }
      if (allowUnknown !== true) {
        throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
      }
    }
  }

  var validator$1 = {
    assertOptions: assertOptions,
    validators: validators$1
  };

  var utils$1 = utils$9;
  var buildURL = buildURL$1;
  var InterceptorManager = InterceptorManager_1;
  var dispatchRequest = dispatchRequest$1;
  var mergeConfig$1 = mergeConfig$2;
  var buildFullPath = buildFullPath$1;
  var validator = validator$1;

  var validators = validator.validators;
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios$1(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios$1.prototype.request = function request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig$1(this.defaults, config);

    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }

    var transitional = config.transitional;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    var promise;

    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest, undefined];

      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);

      promise = Promise.resolve(config);
      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }


    var newConfig = config;
    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }

    try {
      promise = dispatchRequest(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }

    return promise;
  };

  Axios$1.prototype.getUri = function getUri(config) {
    config = mergeConfig$1(this.defaults, config);
    var fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  };

  // Provide aliases for supported request methods
  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios$1.prototype[method] = function(url, config) {
      return this.request(mergeConfig$1(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });

  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/

    function generateHTTPMethod(isForm) {
      return function httpMethod(url, data, config) {
        return this.request(mergeConfig$1(config || {}, {
          method: method,
          headers: isForm ? {
            'Content-Type': 'multipart/form-data'
          } : {},
          url: url,
          data: data
        }));
      };
    }

    Axios$1.prototype[method] = generateHTTPMethod();

    Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
  });

  var Axios_1 = Axios$1;

  var CancelToken_1;
  var hasRequiredCancelToken;

  function requireCancelToken () {
  	if (hasRequiredCancelToken) return CancelToken_1;
  	hasRequiredCancelToken = 1;

  	var CanceledError = requireCanceledError();

  	/**
  	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
  	 *
  	 * @class
  	 * @param {Function} executor The executor function.
  	 */
  	function CancelToken(executor) {
  	  if (typeof executor !== 'function') {
  	    throw new TypeError('executor must be a function.');
  	  }

  	  var resolvePromise;

  	  this.promise = new Promise(function promiseExecutor(resolve) {
  	    resolvePromise = resolve;
  	  });

  	  var token = this;

  	  // eslint-disable-next-line func-names
  	  this.promise.then(function(cancel) {
  	    if (!token._listeners) return;

  	    var i;
  	    var l = token._listeners.length;

  	    for (i = 0; i < l; i++) {
  	      token._listeners[i](cancel);
  	    }
  	    token._listeners = null;
  	  });

  	  // eslint-disable-next-line func-names
  	  this.promise.then = function(onfulfilled) {
  	    var _resolve;
  	    // eslint-disable-next-line func-names
  	    var promise = new Promise(function(resolve) {
  	      token.subscribe(resolve);
  	      _resolve = resolve;
  	    }).then(onfulfilled);

  	    promise.cancel = function reject() {
  	      token.unsubscribe(_resolve);
  	    };

  	    return promise;
  	  };

  	  executor(function cancel(message) {
  	    if (token.reason) {
  	      // Cancellation has already been requested
  	      return;
  	    }

  	    token.reason = new CanceledError(message);
  	    resolvePromise(token.reason);
  	  });
  	}

  	/**
  	 * Throws a `CanceledError` if cancellation has been requested.
  	 */
  	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  	  if (this.reason) {
  	    throw this.reason;
  	  }
  	};

  	/**
  	 * Subscribe to the cancel signal
  	 */

  	CancelToken.prototype.subscribe = function subscribe(listener) {
  	  if (this.reason) {
  	    listener(this.reason);
  	    return;
  	  }

  	  if (this._listeners) {
  	    this._listeners.push(listener);
  	  } else {
  	    this._listeners = [listener];
  	  }
  	};

  	/**
  	 * Unsubscribe from the cancel signal
  	 */

  	CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  	  if (!this._listeners) {
  	    return;
  	  }
  	  var index = this._listeners.indexOf(listener);
  	  if (index !== -1) {
  	    this._listeners.splice(index, 1);
  	  }
  	};

  	/**
  	 * Returns an object that contains a new `CancelToken` and a function that, when called,
  	 * cancels the `CancelToken`.
  	 */
  	CancelToken.source = function source() {
  	  var cancel;
  	  var token = new CancelToken(function executor(c) {
  	    cancel = c;
  	  });
  	  return {
  	    token: token,
  	    cancel: cancel
  	  };
  	};

  	CancelToken_1 = CancelToken;
  	return CancelToken_1;
  }

  var spread;
  var hasRequiredSpread;

  function requireSpread () {
  	if (hasRequiredSpread) return spread;
  	hasRequiredSpread = 1;

  	/**
  	 * Syntactic sugar for invoking a function and expanding an array for arguments.
  	 *
  	 * Common use case would be to use `Function.prototype.apply`.
  	 *
  	 *  ```js
  	 *  function f(x, y, z) {}
  	 *  var args = [1, 2, 3];
  	 *  f.apply(null, args);
  	 *  ```
  	 *
  	 * With `spread` this example can be re-written.
  	 *
  	 *  ```js
  	 *  spread(function(x, y, z) {})([1, 2, 3]);
  	 *  ```
  	 *
  	 * @param {Function} callback
  	 * @returns {Function}
  	 */
  	spread = function spread(callback) {
  	  return function wrap(arr) {
  	    return callback.apply(null, arr);
  	  };
  	};
  	return spread;
  }

  var isAxiosError;
  var hasRequiredIsAxiosError;

  function requireIsAxiosError () {
  	if (hasRequiredIsAxiosError) return isAxiosError;
  	hasRequiredIsAxiosError = 1;

  	var utils = utils$9;

  	/**
  	 * Determines whether the payload is an error thrown by Axios
  	 *
  	 * @param {*} payload The value to test
  	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
  	 */
  	isAxiosError = function isAxiosError(payload) {
  	  return utils.isObject(payload) && (payload.isAxiosError === true);
  	};
  	return isAxiosError;
  }

  var utils = utils$9;
  var bind = bind$2;
  var Axios = Axios_1;
  var mergeConfig = mergeConfig$2;
  var defaults = defaults_1;

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);

    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);

    // Copy context to instance
    utils.extend(instance, context);

    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };

    return instance;
  }

  // Create the default instance to be exported
  var axios = createInstance(defaults);

  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;

  // Expose Cancel & CancelToken
  axios.CanceledError = requireCanceledError();
  axios.CancelToken = requireCancelToken();
  axios.isCancel = requireIsCancel();
  axios.VERSION = requireData().version;
  axios.toFormData = requireToFormData();

  // Expose AxiosError class
  axios.AxiosError = requireAxiosError();

  // alias for CanceledError for backward compatibility
  axios.Cancel = axios.CanceledError;

  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = requireSpread();

  // Expose isAxiosError
  axios.isAxiosError = requireIsAxiosError();

  axios$1.exports = axios;

  // Allow use of default import syntax in TypeScript
  axios$1.exports.default = axios;

  (function (module) {
  	module.exports = axios$1.exports;
  } (axios$2));

  var _axios = /*@__PURE__*/getDefaultExportFromCjs(axios$2.exports);

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  var camelcase = {exports: {}};

  const UPPERCASE = /[\p{Lu}]/u;
  const LOWERCASE = /[\p{Ll}]/u;
  const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
  const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
  const SEPARATORS = /[_.\- ]+/;

  const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
  const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
  const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

  const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
  	let isLastCharLower = false;
  	let isLastCharUpper = false;
  	let isLastLastCharUpper = false;

  	for (let i = 0; i < string.length; i++) {
  		const character = string[i];

  		if (isLastCharLower && UPPERCASE.test(character)) {
  			string = string.slice(0, i) + '-' + string.slice(i);
  			isLastCharLower = false;
  			isLastLastCharUpper = isLastCharUpper;
  			isLastCharUpper = true;
  			i++;
  		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
  			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
  			isLastLastCharUpper = isLastCharUpper;
  			isLastCharUpper = false;
  			isLastCharLower = true;
  		} else {
  			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
  			isLastLastCharUpper = isLastCharUpper;
  			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
  		}
  	}

  	return string;
  };

  const preserveConsecutiveUppercase = (input, toLowerCase) => {
  	LEADING_CAPITAL.lastIndex = 0;

  	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
  };

  const postProcess = (input, toUpperCase) => {
  	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
  	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

  	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
  		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
  };

  const camelCase$1 = (input, options) => {
  	if (!(typeof input === 'string' || Array.isArray(input))) {
  		throw new TypeError('Expected the input to be `string | string[]`');
  	}

  	options = {
  		pascalCase: false,
  		preserveConsecutiveUppercase: false,
  		...options
  	};

  	if (Array.isArray(input)) {
  		input = input.map(x => x.trim())
  			.filter(x => x.length)
  			.join('-');
  	} else {
  		input = input.trim();
  	}

  	if (input.length === 0) {
  		return '';
  	}

  	const toLowerCase = options.locale === false ?
  		string => string.toLowerCase() :
  		string => string.toLocaleLowerCase(options.locale);
  	const toUpperCase = options.locale === false ?
  		string => string.toUpperCase() :
  		string => string.toLocaleUpperCase(options.locale);

  	if (input.length === 1) {
  		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
  	}

  	const hasUpperCase = input !== toLowerCase(input);

  	if (hasUpperCase) {
  		input = preserveCamelCase(input, toLowerCase, toUpperCase);
  	}

  	input = input.replace(LEADING_SEPARATORS, '');

  	if (options.preserveConsecutiveUppercase) {
  		input = preserveConsecutiveUppercase(input, toLowerCase);
  	} else {
  		input = toLowerCase(input);
  	}

  	if (options.pascalCase) {
  		input = toUpperCase(input.charAt(0)) + input.slice(1);
  	}

  	return postProcess(input, toUpperCase);
  };

  camelcase.exports = camelCase$1;
  // TODO: Remove this for the next major release
  camelcase.exports.default = camelCase$1;

  var camelCase = camelcase.exports;
  /**
   * Alias String.prototype.valueOf
   * @memberOf module:Utils
   * @type {Function}
   */

  var strValue = String.prototype.valueOf;
  /**
   * Alias Object.prototype.toString
   * @memberOf module:Utils
   * @type {Function}
   */

  var toStr = Object.prototype.toString;
  /**
   * Valida String u Object
   * @memberOf module:Utils
   * @param  {(String|Object)} value la cadena a evaluar
   *
   * @return {Boolean} 
   */

  var tryStringObject = function tryStringObject(value) {
    try {
      strValue.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  /**
   * Alias Object.defineProperty
   * @memberOf module:Utils
   * @type {Function}
   */

  var defineProperty = Object.defineProperty;
  /**
   * Alias Object.getOwnPropertyDescriptor
   * @memberOf module:Utils
   * @type {Function}
   */

  var gOPD = Object.getOwnPropertyDescriptor;
  /**
   * Verifica si es una Array
   * @memberOf module:Utils
   * @function isArray
   * @return {Boolean}
   */

  var isArray = Array.isArray;
  /**
   * Funtions
   */

  /**
   * Establece Propiedades de los Objetos
   * @memberOf module:Utils
   * @private
   * @param {Object} target el Objecto
   * @param {Object} opt    opciones del objecto
   */

  function setPropertyObj(target, opt) {
    if (defineProperty && opt.name === "__proto__") {
      defineProperty(target, opt.name, {
        enumerable: true,
        configurable: true,
        value: opt.newValue,
        writable: true
      });
    } else {
      target[opt.name] = opt.newValue;
    }
  }
  /**
   * Obtiene una propiedad de un objecto
   * @memberOf module:Utils
   * @private
   * @param  {Object} obj  El Objecto
   * @param  {String} name Nombre de la propiedad
   *
   * @return {(Void|*)}
   */

  function getProperty(obj, name) {
    if (name === "__proto__") {
      if (!hasProp(obj, name)) {
        return void 0;
      } else if (gOPD) {
        return gOPD(obj, name).value;
      }
    }

    return obj[name];
  }
  /**
   * Extiende un objeto o matriz y combinar sus elementos
   * @memberOf module:Utils
   * @function extend
   * @param {...*} Argumentos Lista de Objetos a iterar
   * @return {(String|Object|Array)} retorna el elemento, o la unión de ellos
   */

  function extend() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target,
        deep,
        i,
        length = 0;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 0) {
      return void 0;
    }

    target = args[0];
    length = args.length;
    i = 1;
    deep = false;

    if (typeof target === "boolean") {
      deep = target;
      target = args[1] || {};
      i = 2;
    }

    if (empty(target) || _typeof(target) !== "object" && typeof target !== "function") {
      target = {};
    }

    for (; i < length; ++i) {
      if (args[i] !== null) {
        options = args[i];

        for (name in options) {
          if (hasProp(options, name)) {
            src = getProperty(target, name);
            copy = getProperty(options, name);

            if (target !== copy) {
              copyIsArray = isArrayish(copy);

              if (deep && copy && (isObject(copy) || copyIsArray)) {
                if (copyIsArray) {
                  copyIsArray = false;
                  clone = src && isArrayish(src) ? src : [];
                } else {
                  clone = src && isObject(src) ? src : {};
                }

                setPropertyObj(target, {
                  name: name,
                  newValue: extend(deep, clone, copy)
                });
              } else if (!not(copy)) {
                setPropertyObj(target, {
                  name: name,
                  newValue: copy
                });
              }
            }
          }
        }
      }
    }

    return target;
  }
  /**
   * Verifica si es un texto valido
   * @memberOf module:Utils
   * @function isString
   * @param  {*}  value
   * @return {Boolean}  verdadero si es un string
   */

  function isString(value) {
    var strClass = "[object String]",
        hasToStringTag = typeof Symbol === "function" && _typeof(Symbol.toStringTag) === "symbol";

    if (typeof value === "string") {
      return true;
    }

    if (_typeof(value) !== "object") {
      return false;
    }

    return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
  }
  /**
   * Verifica si es un objecto
   * @memberOf module:Utils
   * @function isObject
   * @param  {*}  obj
   * @return {Boolean} verdadero si es un objecto
   */

  function isObject(obj) {
    var proto;

    if (!obj || toStr.call(obj) !== "[object Object]") {
      return false;
    }

    proto = obj.prototype !== undefined;

    if (!proto) {
      return true;
    }

    return proto.constructor && typeof proto.constructor === "function";
  }
  /**
   * Verifica si es una Matriz
   * @memberOf module:Utils
   * @function isArrayish
   * @param  {*}  obj
   * @return {Boolean}  Verdadero si es un array
   */

  function isArrayish(obj) {
    if (!obj) {
      return false;
    }

    return obj instanceof Array || isArray(obj) || obj.length >= 0 && obj.splice instanceof Function;
  }
  /**
   * Verifica si es una función
   * @memberOf module:Utils
   * @function isFunction
   * @param  {*} fn
   * @return {Boolean}  verdadero si es una función
   */

  function isFunction(fn) {
    if (!fn) {
      return false;
    }

    var string = toStr.call(fn);
    return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && ( // IE8 and below
    fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
  }
  /**
   * Busca y valida la propiedad del objeto dato
   * @memberOf module:Utils
   * @function hasProp
   * @param  {Object}  obj  objeto a verificar
   * @param  {String}  prop propiedad a buscar
   * @return {Boolean}  verdadero si la propiedad existe dentro del objeto
   */

  function hasProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  /**
   * Verifica si la variable dada esta vaciá
   * @memberOf module:Utils
   * @function empty
   * @example
   * let a
   * empty(a) // true
   * empty(0) // true
   * empty(0.0) // true
   * empty(false) // true
   * empty([]) // true
   * empty({}) // true
   * empty("") // true
   * empty() // true
   * empty(1) // false
   * @param  {*} arg Variable, Objecto, matriz etc.. a verificar
   * @return {Boolean}  Verdadero si esta vació
   */

  function empty(arg) {
    var und;
    var emptyVal = [undefined, null, false, 0, 0.0, "", "0", "0.0", und],
        l = emptyVal.length;

    if (typeof arg === "undefined") {
      return true;
    }

    for (var i = 0; i < l; i++) {
      if (arg === emptyVal[i]) return true;
    }

    if (isArrayish(arg)) {
      return arg.length === 0;
    }

    if (isObject(arg)) {
      var o = 0;

      for (var _i in arg) {
        if (hasProp(arg, _i)) {
          o++;
        }
      }

      return o === 0;
    }

    return false;
  }
  /**
   * Verifica si la variable dada no es nula o indefinida
   * @memberOf module:Utils
   * @function not
   * @param  {*} arg Variable
   * @return {Boolean} verdadero si esta nula o indefinida
   */

  function not(arg) {
    return arg === undefined || arg === null;
  }
  /**
   * Valida una URL
   * @memberOf module:Utils
   * @function isURL
   * @param  {(String|URL)}  u URI a validar
   * @return {Boolean}
   */

  function isURL(u) {
    return u instanceof URL || /(http|https|ftp):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(u);
  }
  /**
   * ForEach Personalizado.
   * <p>Extiende la funcionalidad del forEach por defecto de los Array para todo tipo de elementos.</p>
   * <p>Para saber más visite <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" alt="Docuementación de ForEach">forEach en Developer Mozilla</a></p>
   * @memberOf module:Utils
   * @function each
   * @param  {(Object|Array)}   arr      El Objecto a iterar
   * @param  {Function} callback Función a ejecutar
   * @param  {(Object|Array)}   thisArg  Valor de la constante this
   */

  function each(arr, callback, thisArg) {
    if (empty(arr)) {
      return;
    }

    if (typeof arr.forEach === "function") {
      return arr.forEach(callback, thisArg);
    }

    if (!isFunction(callback)) {
      return arr;
    }

    var T,
        k,
        O = Object(arr),
        len = O.length >>> 0;

    if (len === 0 && isObject(O)) {
      len = Object.keys(O).length;
    }

    if (!empty(thisArg)) {
      T = thisArg;
    }

    for (k in O) {
      if (hasProp(O, k)) {
        var KeyValue = O[k];
        callback.call(T, KeyValue, k, O);
      }
    }
  }
  /**
   * Regula y normaliza el nombre de un atributo, función, o variable para su uso en Javascript
   * @memberOf module:Utils
   * @function normName
   * @param  {String} name variable
   * @return {(String|void)}  el nombre normalizado o indefinido
   */

  function normName(name) {
    return typeof name !== "string" ? undefined : name.replace(/-/g, "").toLowerCase();
  }
  /**
   * Convierte los datos tipo texto JSON pasados por atributos a un objecto valido
   * @memberOf module:Utils
   * @function normalizeData
   * @param  {String} data
   * @return {Object} El objeto JSON
   */

  function normalizeData(data) {
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }
  /**
   * Transforma una cadena de texto en una matriz
   * @memberOf module:Utils
   * @function strToArr
   * @param  {String} str       La cadena
   * @param  {String} separator El separador
   *
   * @return {Array}
   */

  function strToArr(str) {
    var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

    if (empty(str)) {
      return [];
    }

    if (str.indexOf(separator) === -1) {
      return [str];
    }

    return isArrayish(str) ? str : str.split(separator);
  }
  /**
   * Crea una uri a partir de un String
   * @memberOf module:Utils
   * @function createURI
   * @example
   * _$.createURI('mifile.php')
   * // return --> https://domain.ext/path/mifile.php
   * @param  {String} u Dirección o path a convertir
   * @return {String}   URI bien formateada
   */

  function createURI(u) {
    var a = document.createElement('a');
    a.href = u;
    return !not(a.href) && isURL(a.href) ? a.href : u;
  }
  /**
   * Construye una URL valida para la API fetch o XMLHttpRequest
   * @memberOf module:Utils
   * @function url
   * @param  {String} urlBase URL
   * @param  {Object} params  Conjunto de parametros de URLSearchParams
   * @return {URL}         API URL
   */

  function url(urlBase) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!isURL(urlBase)) {
      urlBase = createURI(urlBase);
    }

    var url = new URL(urlBase);
    Object.keys(params).forEach(function (key) {
      return url.searchParams.append(key, params[key]);
    });
    return url;
  }

  /**
   * Clase para serializar valores para envió [Fetch]{@link module:Plugins.HTTP.fetch}
   * @namespace Serialize
   * @memberOf module:Plugins.HTTP
   * @class
   */

  var Serialize = /*#__PURE__*/function () {
    function Serialize() {
      _classCallCheck(this, Serialize);
    }

    _createClass(Serialize, [{
      key: "stringify",
      value:
      /**
       * Serializa los datos
       * @memberOf module:Plugins.HTTP.Serialize
       * @param  {(Object|Array)} param Grupo de parámetros a serializar
       * @param  {String} space separador de la cadena por defecto & para URL
       * @return {String}       cadena serializada
       */
      function stringify(param) {
        var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';

        return Object.keys(param).map(function (key) {
          if (isObject(param[key]) || Array.isArray(param[key])) {
            return "".concat(encodeURIComponent(key), "[]=").concat(new Serialize().stringify(param[key], space));
          } else {
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(param[key]));
          }
        }).join(space);
      }
      /**
       * Deserializa una cadena serializada
       * @memberOf module:Plugins.HTTP.Serialize
       * @param  {String} param cadena serializada
       * @param  {String} space Divisor de cadena para cortar
       * @return {Object}       Objeto deserializado
       */

    }, {
      key: "parse",
      value: function parse(param) {
        var _this2 = this;

        var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
        var obj = {};
        param.split(space).forEach(function (query) {
          var param = query.split('=');
          var key = decodeURIComponent(param[0]);
          var value = decodeURIComponent(param[1]);

          if (key.indexOf('[]') > -1) {
            obj[key.replace('[]', '')] = _this2.parse(value);
          } else {
            obj[key] = value;
          }
        });
        return obj;
      }
    }]);

    return Serialize;
  }();

  /**
   * Identificador Único para los Atributos
   * @memberOf module:Core.Data
   * @private
   * @type {Number}
   * @defaultvalue -1
   */

  var DataUI = -1;
  /**
   * Manejador de Eventos Data
   * @namespace Data
   * @memberOf module:Core
   * @requires Utils
   * @class
   * @tutorial Data
   */

  var Data = /*#__PURE__*/function () {
    /**
     * @return {module:Core.Data}
     */
    function Data() {
      _classCallCheck(this, Data);

      this.UID = "FSData";
      DataUI++;
      this.ID = DataUI;
    }
    /**
     * Verifica si el objeto dado es un Elemento
     * @memberOf module:Core.Data
     * @public
     * @param  {Element} el El elemento
     * @return {Boolean}
     */


    _createClass(Data, [{
      key: "acceptData",
      value: function acceptData(el) {
        return el.nodeType === 1 || el.nodeType === 9 || !+el.nodeType;
      }
      /**
       * Valida si se puede establece o usar el Atributo DataSet del HTMLElement
       * @param  {Element} el El Elemento
       * @memberOf module:Core.Data
       * @public
       * @return {Boolean}
       */

    }, {
      key: "acceptDataSet",
      value: function acceptDataSet(el) {
        return this.acceptData(el) && !not(el.dataset);
      }
      /**
       * Obtiene los datos Almacenados en el Elemento
       * @memberOf module:Core.Data
       * @public
       * @param  {Element}  el El elemento
       * @param  {Boolean} config Indica si el objeto sera configurable
       * @return {Object}
       */

    }, {
      key: "storage",
      value: function storage(el) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var val = el[this.UID];

        if (!val) {
          val = {};

          if (this.acceptData(el)) {
            if (el.nodeType) {
              el[this.UID] = val;
            } else {
              defineProperty(el, this.UID, {
                value: val,
                configurable: config
              });
            }
          }
        }

        return val;
      }
      /**
       * Establece el nuevo valor de la propiedad
       * @memberOf module:Core.Data
       * @public
       * @param {Element} el El elemento
       * @param {(String|Object)} key  La clave
       * @param {(Object|String)} data El valor a establecer
       * @return {(Object|String)} El nuevo valor establecido
       */

    }, {
      key: "set",
      value: function set(el, key, data) {
        var store = this.storage(el);

        if (isString(key)) {
          store[camelCase(key)] = data;
        } else {
          for (var prop in key) {
            if (hasProp(key, prop)) {
              store[camelCase(prop)] = key[prop];
            }
          }
        }

        return store;
      }
      /**
       * Obtiene el valor del Atributo o todos
       * @memberOf module:Core.Data
       * @public
       * @param  {Element} el El elemento
       * @param  {(String|Null)} key La clave a buscar si se omite se buscaran todos los atributos
       * @return {(Object|String|Boolean)}
       */

    }, {
      key: "get",
      value: function get(el, key) {
        if (not(key)) {
          return this.storage(el);
        }

        return el[this.UID] && el[this.UID][key] ? el[this.UID][key] : false;
      }
      /**
       * Obtiene o Establece el atributo
       * @memberOf module:Core.Data
       * @public
       * @param  {Element} el El elemento
       * @param  {String} key  La clave
       * @param  {(String|Object)} data El valor
       * @return {(Object|String)}      El valor obtenido o establecido
       */

    }, {
      key: "access",
      value: function access(el, key, data) {
        if (not(key) || key && isString(key) && not(data)) {
          return this.get(el, key);
        }

        this.set(el, key, data);
        return not(data) ? key : data;
      }
      /**
       * Verifica si el elemento tiene la clave dada
       * @public
       * @memberOf module:Core.Data
       * @param  {Element}  el El elemento
       * @param  {String}  key La clave
       * @return {Boolean}
       */

    }, {
      key: "has",
      value: function has(el, key) {
        if (not(key)) {
          var c = this.storage(el);
          return !not(c);
        } else {
          return this.get(el, key) !== false ? true : el.hasAttributes && el.hasAttributes("data-".concat(key)) ? el.getAttribute("data-".concat(key)) : false;
        }
      }
      /**
       * Remueve una clave dada
       * @public
       * @memberOf module:Core.Data
       * @param  {Element} el El elemento
       * @param  {String} key La clave
       * @return {(void|Boolean)}
       */

    }, {
      key: "remove",
      value: function remove(el, key) {
        var i,
            store = el[this.UID];

        if (not(store)) {
          var ds = this.data(el);

          if (not(ds)) {
            return;
          }

          this.remove(el, key);

          if (this.acceptDataSet(el)) {
            attrs = el.attributes;
            i = attrs.length;

            while (i--) {
              if (attrs[i]) {
                var name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  el.removeAttribute(name);
                }
              }
            }
          }

          return;
        }

        if (!not(key)) {
          if (isArrayish(key)) {
            key = key.map(camelCase);
          } else {
            key = camelCase(key);
            key = key in store ? [key] : key.match(/[^\x20\t\r\n\f]+/g) || [];
          }

          i = key.length;

          while (i--) {
            delete store[key[i]];
          }
        }

        if (not(key) && not(store)) {
          if (el.nodeType) {
            el[this.UID] = undefined;
          } else {
            delete el[this.UID];
          }
        }

        return true;
      }
      /**
       * Establece los atributos data de un elemento
       * @memberOf module:Core.Data
       * @public 
       * @param  {Element} elem Elemento a manipular
       * @param  {String} key  La clave del atributo data ejemplo data-valor; key = valor
       * @param  {(Object|String|Array)} data El resultado del atributo data
       * @return {(Object|undefine|Array)}  El resultado del atributo data obtenido
       */

    }, {
      key: "attrToStorage",
      value: function attrToStorage(elem, key, data) {
        var name;

        if (empty(data) && elem.nodeType === 1) {
          name = "data-" + key.replace(/[A-Z]/g, "-$&").toLowerCase();
          data = elem.getAttribute(name);

          if (typeof data === "string") {
            data = normalizeData(data);
            this.set(elem, key, data);
          } else {
            data = undefined;
          }
        }

        return data;
      }
      /**
       * Establece u Obtiene los atributos de Data
       * @memberOf module:Core.Data
       * @public 
       * @param  {(NodeList|Element)}    els  El o los Elementos
       * @param  {...(Array|Object|String)} arg Cualqier argumento según su accion hasta 2 maximo
       *
       * @return {*}
       */

    }, {
      key: "data",
      value: function data(els) {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var ds, attrs, i, el;

        if (not(els.length)) {
          el = els;
          els = [els];
        } else {
          el = els[0];
        }

        if (args.length === 0) {
          ds = this.get(el);

          if (this.acceptDataSet(el)) {
            attrs = el.attributes;
            i = attrs.length;

            while (i--) {
              if (attrs[i]) {
                var name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  this.attrToStorage(el, name, ds[name]);
                }
              }
            }
          }

          return ds;
        }

        if (args.length === 1) {
          if (isArrayish(args[0])) {
            var res = {},
                _i = 0;
            each(els, function (elem) {
              var id = elem.getAttribute("id"),
                  prefix = !not(id) ? id : el.tagName + _i;
              args[0].forEach(function (d) {
                res[prefix] = res[prefix] || {};

                var re = _this.get(elem, d);

                if (not(re)) {
                  if (elem.nodeType === 1) {
                    re = elem.hasAttributes("data-".concat(d)) ? elem.getAttribute("data-".concat(d)) : re;
                    re = normalizeData(re);
                  }
                }

                res[prefix][d] = re;
              });
              _i++;
            });
            return res;
          } else if (isObject(args[0])) {
            return each(els, function (elem) {
              for (var key in args[0]) {
                if (hasProp(args[0], key)) {
                  var value = normalizeData(args[0][key]);

                  _this.set(elem, key, value);
                }
              }
            });
          } else if (isString(args[0])) {
            var _res = this.get(el, args[0]);

            if (!_res || not(_res)) {
              if (el.nodeType === 1) {
                _res = el.hasAttributes("data-".concat(args[0])) ? el.getAttribute("data-".concat(args[0])) : _res;
                _res = normalizeData(_res);
              }
            }

            return _res;
          }
        }

        return each(els, function (elem) {
          _this.set(elem, args[0], args[1]);
        });
      }
    }]);

    return Data;
  }();

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var ListEvents = ['blur', 'focus', 'resize', 'scroll', 'click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'change', 'select', 'submit', 'keydown', 'keypress', 'keyup', 'contextmenu', 'touchstart', 'touchend', 'touchmove', 'touchcancel'];
  /**
   * Maneja y manipula los Eventos del DOM
   * @namespace Event
   * @memberOf module:Core
   * @requires Utils
   * @class
   * @tutorial Events
   */

  var Event = /*#__PURE__*/function () {
    function Event() {
      _classCallCheck(this, Event);

      _defineProperty(this, "_ds", new Data());

      _defineProperty(this, "_eventName", "fsEvent");
    }
    /**
     * Añada un Evento Escucha al elemento
     * @private
     * @memberOf Core.Event
     * @param {Element}   el      El Elemento
     * @param {String}   event   Nombre del Evento
     * @param {Function} fn      Función a asignar
     * @param {Boolean}  capture use capture
     */


    _createClass(Event, [{
      key: "_add",
      value: function _add(el, event, fn) {
        var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        return el.addEventListener(event, fn, useCapture);
      }
      /**
       * Remueve un evento asignado
       * @private
       * @memberOf Core.Event
       * @param  {Element}   el      El Elemento
       * @param  {String}   event   el nombre del evento
       * @param  {Function} fn      Función asignada
       * @param  {(Boolean|Object)}   capture Use capture ó opciones de captura
       */

    }, {
      key: "_remove",
      value: function _remove(el, event, fn, capture) {
        if (not(capture)) {
          capture = true;
        }

        return el.removeEventListener(event, fn, capture);
      }
      /**
       * Dispara un Evento
       * @private
       * @memberOf Core.Event
       * @param  {Element} el       El elemento
       * @param  {(Event|CustomEvent)} newEvent Nombre del Evento a disparar
       * @return {Element}         
       */

    }, {
      key: "_dispatch",
      value: function _dispatch(el, newEvent) {
        return el.dispatchEvent(newEvent);
      }
      /**
       * Crea un Evento
       * @private
       * @memberOf Core.Event
       * @param  {string} name            Nombre del Evento
       * @param  {(Boolean|String|Object|Array|Fascino)} customEventInit Acciones del evento capturarle, estas acciones se captura con e.detail
       */

    }, {
      key: "_createEvent",
      value: function _createEvent(name) {
        var customEventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var o;

        if (hasProp(customEventInit, 'detail')) {
          o = extend({}, {
            bubbles: true,
            cancelable: true,
            detail: null
          }, customEventInit);
        } else {
          o = {
            bubbles: true,
            cancelable: true,
            detail: customEventInit
          };
        }

        return new CustomEvent(name, o);
      }
      /**
       * Almacena los eventos asignado a cada elemento en memoria del elemento
       * @private
       * @memberOf Core.Event
       * @param {Element} el   El Elemento
       * @param {String} name Nombre del Evento
       * @param {(Boolean|String|Object|Array|Fascino|Function)} data información del evento
       * @return {Object} Lista de Eventos Asignado
       */

    }, {
      key: "_setData",
      value: function _setData(el, event, data) {
        if (this._ds.acceptData(el) && el.self !== window) {
          var dataEv = this._ds.has(el, this._eventName) ? this._ds.get(el, this._eventName) : this._ds.access(el, this._eventName, {}),
              name = camelCase(event);
              strToArr(event, '.');
              var e = {};
          e[this._eventName] = dataEv;
          e[this._eventName][name] = name in dataEv === true ? e[this._eventName][name] : [];

          e[this._eventName][name].push(data);

          return this._ds.set(el, e);
        }
      }
      /**
       * Obtiene información sobre un evento asignado
       * @private
       * @memberOf Core.Event
       * @param  {Element} el    El Elemento
       * @param  {String} name  Nombre del Evento, se puede asignar namespace ejm: click.bs
       * @param  {Number} index posición del evento
       * @return {(Object|Array)}
       */

    }, {
      key: "_getData",
      value: function _getData(el) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        var evList = this._ds.get(el, this._eventName);

        if (not(evList)) {
          return {};
        }

        if (not(name)) {
          return evList;
        }

        name = camelCase(name);

        if (name in evList === false) {
          return false;
        }

        return index === -1 ? evList[name] : evList[name][index];
      }
      /**
       * Verifica que un evento exista
       * @private
       * @memberOf Core.Event
       * @param  {Element}  el    El elemento
       * @param  {String}  name  Nombre
       * @param  {Number}  index Indice del evento
       * @return {Boolean}
       */

    }, {
      key: "_hasData",
      value: function _hasData(el, name) {
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        if (this._ds.has(el, this._eventName)) {
          var evList = this._ds.get(el, this._eventName);

          if (!empty(evList)) {
            if (camelCase(name) in evList) {
              return index > -1 ? evList[camelCase(name)].indexOf(index) > -1 : true;
            }
          }
        }

        return false;
      }
      /**
       * Remueve un Evento Asignado
       * @private
       * @memberOf Core.Event
       * @param  {Element} el    Elemento
       * @param  {String} name  Nombre
       * @param  {Number} index Indice del Evento
       * @return {Boolean}
       */

    }, {
      key: "_removeData",
      value: function _removeData(el, name) {
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

        if (this._ds.has(el, this._eventName)) {
          var ds = this._getData(el, name, index);

          if (not(name)) {
            this._ds.set(el, this._eventName, {});

            return true;
          }

          var camelName = camelCase(name);

          if (camelName in ds) {
            if (index > -1) {
              delete ds[camelName][index];
            } else {
              delete ds[camelName];
            }

            this._ds.set(el, this._eventName, d);

            return this;
          }
        }

        return false;
      }
      /**
       * Remueve todos los Eventos de todos los elementos seleccionado
       * @private
       * @memberOf Core.Event
       * @return {Core.Event}
       */

    }, {
      key: "_off",
      value: function _off(el) {
        this._ds.remove(el, this._eventName);

        return this;
      }
      /**
       * Obtiene los NameSpaces del Evento
       * @private
       * @memberOf Core.Event
       * @param  {Array}  NS     Nombre separado en array
       * @param  {Boolean} onlyNS Si solo se retorna el NS ó se retorna Nombre y NS
       * @return {(String|Object)} 
       */

    }, {
      key: "_getNS",
      value: function _getNS(NS) {
        var onlyNS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var name = NS.shift(),
            ns = NS.join('.');
        return onlyNS ? ns : {
          name: name,
          ns: ns
        };
      } // Public

      /**
       * Obtiene los eventos almacenados
       * @public
       * @memberOf Core.Event
       * @see Core.Event._getData
       * @return {Object}
       */

    }, {
      key: "getEvents",
      value: function getEvents(el) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return this._getData(el, name, index);
      }
      /**
       * Ejecuta los eventos dados
       * @memberOf Core.Event
       * @public
       * @param  {Element} el         El elemento
       * @param  {(String|Array)} eventList Lista de eventos con su namespace si es necesario
       * @param  {String} selector        Selector a iterar o null
       * @param  {Function} callback    Función a ejecutar
       * @param  {Object} options    Opciones de addEventListiner
       * @return {(Element|Object|Core.Event)}
       */

    }, {
      key: "on",
      value: function on(el, eventList, selector, callback, options) {
        var _this2 = this;

        if (not(el)) {
          return this;
        }

        if (isFunction(selector)) {
          options = callback;
          callback = selector;
          selector = undefined;
        }

        if (!isObject(options)) {
          options = {};
        }

        var EVL = strToArr(eventList, ' ');
        EVL.forEach(function (e) {
          var nameAndNs = strToArr(e, '.'),
              nameAndNSObj = _this2._getNS(nameAndNs, false),
              ns = nameAndNSObj.ns,
              name = nameAndNSObj.name,
              handler = function handler(ev) {
            var target = ev.target;

            if (!selector) {
              callback.call(el, ev);
            } else {
              while (target && target !== el) {
                if (Element.prototype.matches.call(target, selector)) {
                  callback.call(target, ev);

                  if (ev.isPropagationStopped) {
                    ev.stopImmediatePropagation();
                    break;
                  }
                }

                target = target.parentNode;
              }
            }

            if (!not(options.once)) {
              _this2.off(el, eventList, selector, options);
            }
          };

          defineProperty(handler, 'name', {
            value: callback.name && callback.name !== '' ? callback.name : "func_event_".concat(name, "_").concat(not(ns) ? new Date().getTime() : ns)
          });
          var NameEvents = ListEvents.indexOf(name) > -1 ? name : e;

          _this2._add(el, NameEvents, handler, !not(options.capture) ? options.capture : false);

          _this2._setData(el, e, {
            event: e,
            handler: handler,
            selector: selector,
            ns: ns,
            options: !not(options) ? options : false
          });
        });
        return el;
      }
      /**
       * Ejecuta solo el primer eventos del elemento
       * @memberOf Core.Event
       * @public
       * @param  {Element} el      El Elemento
       * @param  {String} events  Eventos
       * @param  {String} sel     Selector o null
       * @param  {Function} handler Función a ejecutar
       * @param  {Object} options Opciones de addEventListiner
       * @return {(Element|Object|Core.Event)}
       */

    }, {
      key: "one",
      value: function one(el, events, sel, handler, options) {
        if (!isObject(options)) {
          options = {};
        }

        options.once = true;
        return this.on.apply(this, [el, events, sel, handler, options]);
      }
      /**
       * Remueve los Eventos de los elementos dado
       * @memberOf Core.Event
       * @public
       * @param  {Element} el         Elemento
       * @param  {String} eventsList Lista de Eventos
       * @param  {String} sel        Selecotr o null
       * @param  {Object} options    Opciones de removeEventListiner
       * @return {(Element|Object|Core.Event)}
       */

    }, {
      key: "off",
      value: function off(el, eventsList, sel, options) {
        var _this3 = this;

        var index = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        if (isObject(sel)) {
          options = sel;
          sel = null;
        }

        if (!isNaN(options)) {
          index = options;
          options = {};
        }

        if (!isObject(options)) {
          options = {};
        }

        var Dev = this._getData(el);

        if (not(eventsList) || eventsList.toLowerCase() === 'all' || eventsList === '*') {
          var _ret = function () {
            var _this = _this3;

            if (Dev) {
              for (var prop in Dev) {
                if (hasProp(Dev, prop)) {
                  var e = Dev[prop];
                  e.forEach(function (i) {
                    _this._remove(el, i.event, i.handler, i.options);
                  });
                }
              }

              _this3._off();
            }

            return {
              v: el
            };
          }();

          if (_typeof(_ret) === "object") return _ret.v;
        }

        var EvL = strToArr(eventsList, ' ');
        EvL.forEach(function (e) {
          var nMap = strToArr(e, '.'),
              evMap = nMap.length > 1 ? _this3._getNS(nMap, true) : {
            name: nMap[0],
            ns: ''
          },
              name = normName(evMap.name);
              options.ns ? options.ns : evMap.ns;

          if (hasProp(Dev, name)) {
            var ev = Dev[name][index];

            _this3._remove(el, ev.event, ev.handler, ev.options);

            _this3._removeData(el, e, index);
          }
        });
        return el;
      }
      /**
       * Dispara un Evento
       * @public
       * @memberOf Core.Event
       * @param  {Element} el    Elemento HTMLELEMENT
       * @param  {String} event Nombre del Evento
       * @return {Element}
       */

    }, {
      key: "fire",
      value: function fire(el, event) {
        return this._dispatch(el, event);
      }
      /**
       * Crea un Evento, versión publica
       * @public
       * @memberOf Core.Event
       * @see Core.Event._createEvent
       */

    }, {
      key: "createEv",
      value: function createEv(name, data) {
        return this._createEvent(name, data);
      }
    }]);

    return Event;
  }();

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  /**
   * Opciones de Configuración para FT
   * @const
   * @memberOf module:Plugins.HTTP.fetch
   * @namespace OptionsFT
   * @type {Object}
   */

  var OptionsFT = {
    /**
     * Metodo de la llamada
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    method: null,

    /**
     * Encabezado de la Peticion
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {(Object|Headers)}
     */
    headers: null,

    /**
     * Cuerpo de la Solicitud, <cite>Tenga en cuenta que una solicitud que utiliza el método GET o HEAD no puede tener un cuerpo.</cite>
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {(Blob|BufferSource|FormData|URLSearchParams|USVString|ReadableStream|Object)}
     */
    body: null,

    /**
     * Modo para la Solicitud
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    mode: null,

    /**
     * Controla lo que hacen los navegadores con las credenciales (cookies, entradas de autenticación HTTP y certificados de cliente TLS).<br>
     * para saber mas consulte la [guia]{@link https://developer.mozilla.org/en-US/docs/web/api/fetch#parameters}
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    credentials: null,

    /**
     * Indica cómo se debe comportar la solicitud con el cache del navegador.
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    cache: null,

    /**
     * Indica cómo debe actuar si la respuesta devuelve una redirección.
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {(Object|String)}
     */
    redirect: null,

    /**
     * Indica el tipo de respuesta a recibir
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    typeResponse: "json",

    /**
     * Si el recurso solicitado es del tipo multimedia especifique aqui el mime type del recurso adquirido
     * @memberOf module:Plugins.HTTP.fetch.OptionsFT
     * @type {String}
     */
    mime: null
  };

  function getResource(resource) {
    if (resource instanceof Request) {
      return resource;
    } else if (isArrayish(resource)) {
      var ul = resource.shift();

      if (resource.length > 0) {
        return url(ul, resource[0]);
      } else {
        return url(ul);
      }
    } else if (isObject(resource)) {
      return url(resource.url, resource.params);
    }

    return resource;
  }

  function getSettingsOfForm(form) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var d = {},
        url = getResource(form.getAttribute("action")),
        otherData = ['mode', 'credentials', 'cache', 'redirect', 'type-response', 'mime'];
    d.method = form.getAttribute('method').toUpperCase();

    if (form.hasAttribute('enctype')) {
      d.headers = {};
      d.headers['Content-Type'] = form.getAttribute('enctype');
    }

    d.body = new FormData(form);
    each(otherData, function (n) {
      if (form.hasAttribute("data-".concat(n))) {
        d[camelCase(n)] = form.getAttribute("data-".concat(n));
      }
    });
    d = _$.extend({}, d, options);
    return {
      url: url,
      obj: getSettings(_$.extend({}, OptionsFT, d))
    };
  }

  function getSettings(s) {
    if (!isObject(s)) {
      return false;
    }

    var o = extend({}, OptionsFT, s),
        op = {};

    if (o.method.toLowerCase() !== 'post' && not(o.headers)) {
      o.headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      });
    }

    each(o, function (v, n) {
      if (!not(v)) {
        if (n == 'headers') {
          if (v instanceof Headers) {
            op[n] = v;
          } else if (isObject(v)) {
            op[n] = new Headers(v);
          }
        } else if (n == 'body') {
          op[n] = v;
        } else if (n == 'credentials') {
          if (["omit", "same-origin", "include"].indexOf(v) > -1) {
            op[n] = v;
          }
        } else if (n == 'cache') {
          if (["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"].indexOf(v) > -1) {
            op[n] = v;
          }
        } else {
          op[n] = v;
        }
      }
    });
    return !not(op) ? op : false;
  }
  /**
   * Nueva API fetch la evolución de XHR<br>
   * Antes de Usar verifique la [Compatibilidad]{@link https://caniuse.com/fetch}
   * @function fetch
   * @memberOf module:Plugins.HTTP
   * @param  {(String|URL|Request|Array|Object|HTMLFormElement)} resource recurso de la url o un formulario de la instancia de HTMLFormElement
   * @param  {Object} settings Opciones de configuraciones
   *
   * @return {Object}
   */


  function http(resource) {
    var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var loading = false,
        chunks = [],
        error = null,
        controller = null,
        u,
        s,
        tr,
        ml;

    if (resource instanceof HTMLFormElement) {
      var arg = getSettingsOfForm(resource, settings);
      u = arg.url;
      s = arg.obj;
    } else {
      u = getResource(resource);
      s = getSettings(settings);
    }

    tr = s.typeResponse;
    ml = s.mime;
    delete s.typeResponse;
    delete s.mime;

    var _resetLocals = function _resetLocals() {
      loading = false;
      chunks = [];
      error = null;
      controller = new AbortController();
    };

    var _readBody = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(response) {
        var typeResponse,
            mimeType,
            reader,
            length,
            received,
            _yield$reader$read,
            done,
            value,
            payload,
            onProgress,
            onFinished,
            body,
            position,
            _iterator,
            _step,
            chunk,
            n,
            _args = arguments;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                typeResponse = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'json';
                mimeType = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                reader = response.body.getReader(), length = +response.headers.get('content-length');
                received = 0;

              case 4:
                if (!loading) {
                  _context.next = 16;
                  break;
                }

                _context.next = 7;
                return reader.read();

              case 7:
                _yield$reader$read = _context.sent;
                done = _yield$reader$read.done;
                value = _yield$reader$read.value;
                payload = {
                  detail: {
                    received: received,
                    length: length,
                    loading: loading
                  }
                };
                onProgress = new CustomEvent('fetch-progress', payload);
                onFinished = new CustomEvent('fetch-finished', payload);

                if (done) {
                  // Finish loading 
                  loading = false;
                  window.dispatchEvent(onFinished);
                } else {
                  // Push values to the chunk array
                  chunks.push(value);
                  received += value.length;
                  window.dispatchEvent(onProgress);
                }

                _context.next = 4;
                break;

              case 16:
                body = new Uint8Array(received), position = 0;
                _iterator = _createForOfIteratorHelper(chunks);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    chunk = _step.value;
                    body.set(chunk, position);
                    position += chunk.length;
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (!(typeResponse.toLowerCase() === "json")) {
                  _context.next = 30;
                  break;
                }

                n = new TextDecoder('utf-8').decode(body);
                _context.prev = 21;
                return _context.abrupt("return", JSON.parse(n));

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](21);
                return _context.abrupt("return", n);

              case 28:
                _context.next = 39;
                break;

              case 30:
                if (!(typeResponse.toLowerCase() === "blob")) {
                  _context.next = 38;
                  break;
                }

                if (not(mimeType)) {
                  _context.next = 35;
                  break;
                }

                return _context.abrupt("return", new Blob([body], {
                  type: mimeType
                }));

              case 35:
                return _context.abrupt("return", new Blob([body]));

              case 36:
                _context.next = 39;
                break;

              case 38:
                return _context.abrupt("return", new TextDecoder('utf-8').decode(body));

              case 39:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[21, 25]]);
      }));

      return function _readBody(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * Incia la llamada fetch
     * @memberOf module:Plugins.HTTP.fetch
     * @function start
     * @return {Promise}
     */


    var start = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var signal, response;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _resetLocals();

                loading = true;
                signal = controller.signal;
                _context2.prev = 3;
                _context2.next = 6;
                return fetch(u, _objectSpread({
                  signal: signal
                }, s));

              case 6:
                response = _context2.sent;

                if (!(response.status >= 200 && response.status < 300)) {
                  _context2.next = 13;
                  break;
                }

                _context2.next = 10;
                return _readBody(response, tr, ml);

              case 10:
                return _context2.abrupt("return", _context2.sent);

              case 13:
                throw new Error(response.statusText);

              case 14:
                _context2.next = 21;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](3);
                error = _context2.t0;
                return _context2.abrupt("return", error);

              case 21:
                _context2.prev = 21;
                loading = false;
                return _context2.finish(21);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 16, 21, 24]]);
      }));

      return function start() {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * Cancela petición en curso
     * @memberOf module:Plugins.HTTP.fetch
     * @function cancel
     * @return {Promise}
     */


    var cancel = function cancel() {
      var onAbort = new CustomEvent('fetch-abort', {
        detail: {
          status: "abourt"
        }
      });
      controller.abort();

      _resetLocals();

      window.dispatchEvent(onAbort);
    };

    return {
      start: start,
      cancel: cancel
    };
  }

  var ft = http;

  var isGetMethod = function isGetMethod(method) {
    return ['GET', 'JSON', 'SCRIPT'].indexOf(method) !== -1;
  };

  if (window._$ !== undefined) {
    _$.extend(_$, {
      /**
       * Acceso directo desde el navegador a fetch api
       * @memberOf _$
       * @function ft
       * @see module:Plugins.HTTP.fetch
       */
      ft: ft,

      /**
       * Axios
       * @memberOf _$
       * @see [Axios]{@link https://axios-http.com/docs/instance}
       * @param  {Object} config Configuraciones de la instansea
       * @return {Axios}
       */
      axios: function axios() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return _axios.create(config);
      }
    });

    var EvHTTP = ['get', 'post', 'put', 'patch', 'delete', 'json', 'head'];

    _$.each(EvHTTP, function (method) {
      /**
       * Métodos de Fetch publicados en [_$]{@link _$}
       * Los miembros son:
       * 1. get
       * 2. post
       * 3. put
       * 4. patch
       * 5. delete
       * 6. json (Este es igual al metodo Get pero con configuraciónes para recibir un JSON en la respuesta)
       * @function  [methods](url, data, options)
       * @memberOf _$
       * @param  {String} url     Url del Envio
       * @param  {(Null|String|Object)} data    Datos a enviar
       * @param  {Object} options Opciones de [Fetch]{@link Plugins.HTTP.fetch}
       * @return {Promise}
       */
      _$[method] = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(url) {
          var data,
              options,
              m,
              u,
              o,
              _$$ft,
              start,
              cancel,
              _args = arguments;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  data = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                  options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
                  m = method.toUpperCase(), u = isGetMethod(m) && !_$.not(data) ? {
                    url: url,
                    params: data
                  } : url, o = {
                    method: isGetMethod(m) ? 'get' : m.toLowerCase(),
                    body: isGetMethod(m) ? null : data,
                    typeResponse: m === 'JSON' ? 'json' : 'text'
                  };
                  _$$ft = _$.ft(u, _$.extend({}, o, options)), start = _$$ft.start, cancel = _$$ft.cancel; // Creamos o Actualizamos el Metodo de cancelación de la trascición actual

                  _$.ftCancel = cancel;
                  _context.next = 7;
                  return start();

                case 7:
                  return _context.abrupt("return", _context.sent);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();
    });

    _$.extend(_$, {
      /**
       * Carga un Script vía [Fetch]{@link Plugins.HTTP.fecth}
       * @memberOf _$
       * @function getscript
       * @param  {String}   url      Url del Script
       * @param  {Function} callback Función a ejecutar
       * @param  {(Object|Null)}   data    Parámetros a pasar
       * @param  {Object}   options  Opciones de [Fetch]{@link Plugins.HTTP.fecth}
       * @return {Promise}
       */
      getscript: function getscript(url, callback, data, options) {
        if (!_$.isFunction(callback) && !_$.empty(callback)) {
          data = callback;
        }

        return _$.get(url, data, option).then(function (response) {
          var s = responce;

          _$.script(s);

          if (_$.isFunction(callback)) {
            callback(s);
          }
        });
      },

      /**
       * Serializa una cadena para su envio
       * @memberOf _$
       * @function serialize
       * @param  {(Object|Array)} x Grupo de parámetros a serializar
       * @@param {String} space separador de la cadena por defecto & para URL
       * @return {String}
       */
      serialize: function serialize(x) {
        var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
        return new Serialize().stringify(x, space);
      },

      /**
       * Deserializa una cadena previamente serializada con [_$.serialize](@link _$.serialize)
       * @memberOf _$
       * @function unserialize
       * @param  {String} x     cadena serializada
       * @param  {String} space Divisor de cadena para cortar
       * @return {(Object|Array)}
       */
      unserialize: function unserialize(x) {
        var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
        return new Serialize().parse(x, space);
      }
    });
    /**
     * Carga datos vía HTTP y los vuelca en elemento dado
     * @function load
     * @memberOf _$
     * @param  {String} url     URL del envió
     * @param  {(Null|String|Array)} data    Parámetros para el envió
     * @param  {Object} options Opciones de [Fetch]{@link Plugins.HTTP.fetch}
     * @return {(Null|Promise)}
     */


    _$.addFn('load', function (url, data, options) {
      var _this = this;

      if (this.length === 0) {
        return null;
      }

      var callback = 'get';

      if (options && _$.hasProp(options, 'method') && options.method.toUpperCase() !== 'GET') {
        callback = options.method.toLowerCase();
      }

      return _$.hasProp(_$, callback) ? _$[callback](url, data, options).then(function (response) {
        _this.each(function (el) {
          _$(el).html(response);
        });
      })["catch"](function (e) {
        console.error('An error occurred while processing your request', e);
      }) : null;
    });

    _$(document).on('submit.ns.fetch', '[data-fetch]', function (e) {
      var _this2 = this;

      if (this.nodeName === 'FORM') {
        e.preventDefault();
        ft(this).start().then(function (response) {
          _$.hooks.run("fetch-submit-".concat(_$(_this2).attr('id')), response, e, _this2);

          var ev = new Event();
          var onSubmit = ev.createEv('fetch-submit', {
            detail: {
              form: _this2,
              events: e,
              response: response
            }
          });
          ev.fire(_this2, onSubmit);
        });
      }
    });
  }

  var index = {
    axios: _axios,
    ft: ft
  };

  exports["default"] = index;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=fascino-http.umd.js.map
