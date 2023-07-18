# Melange_bug

```sh
$ dune runtest
yarn install v1.22.19
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
Done in 1.61s.
yarn run v1.22.19
$ cp -r _output/node_modules/* ./node_modules/
Done in 0.11s.
File "dune", line 29, characters 0-274:
29 | (rule
30 |  (alias runtest)
31 |  (deps
....
40 |    (progn
41 |     (run yarn prepare-packages)
42 |     (with-accepted-exit-codes 0 (run yarn test)))))
yarn run v1.22.19
$ npx jest
FAIL test/samplelib.test.js
  ✓ it loads (2 ms)
  ✓ test1 (1 ms)
  ✓ test2
  ✕ test3 (1 ms)

  ● test3

    TypeError: Cannot read properties of undefined (reading 'length')

      43 |   var $great$great$eq = open[1];
      44 |   var $$return = open[0];
    > 45 |   return Curry._2($great$great$eq, Curry._1($$return, 2), (function (x) {
         |                                          ^
      46 |                 return Curry._2($great$great$eq, Curry._1($$return, x + 40 | 0), (function (x) {
      47 |                               return Curry._1($$return, (expect(x).toBe(42), undefined));
      48 |                             }));

      at Object._1 (_output/node_modules/melange.runtime/curry.js:31:17)
      at Object._1 [as test3] (_output/samplelib_test.js:45:42)
      at Object.test3 (test/samplelib.test.js:17:29)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 3 passed, 4 total
Snapshots:   0 total
Time:        0.497 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```