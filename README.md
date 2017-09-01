# unthrow

![[Build Status](https://travis-ci.org/pcstl/unthrow)](https://travis-ci.org/pcstl/unthrow)
![Dependencies Status](https://david-dm.org/pcstl/unthrow.svg)

[JavaScript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
are awesome, but they have a fundamental issue: When you use a Promise, you mix
up your asynchronicity-handling code with your error-handling code through
`.catch`. Unthrow fixes this, making you free to handle possible errors wherever
you want to.

## Usage

Just wrap your calls to `Promise`-returning function which may fail with `unthrow`.
The result of an `unthrow`ed call is a new `Promise` which will yield a `Result`.
A `Result` is a plain JavaScript object with a `status` field.

The value of the `status` field may be `"Ok"` or `"Error"`.

If the value of `status` is "Ok", the `Result` will have a `value` field
containing the result of the promise. If the value of `status`
is `"Error"`, the `Result` will have an `error` field containing the error
thrown by the promise.
