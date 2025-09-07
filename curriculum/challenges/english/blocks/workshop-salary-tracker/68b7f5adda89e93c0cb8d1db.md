---
id: 68b7f5adda89e93c0cb8d1db
title: Step 2
challengeType: 20
dashedName: step-2
---

# --description--

Now add the `__init__` method to the Employee class. This constructor method should accept `name` and `level` parameters.

For now, just add the method signature without any body code - you'll implement the functionality in the next step.

# --hints--

You should add an `__init__` method to the `Employee` class.

```js
({
    test: () => runPython(`
    assert _Node(_code).find_class('Employee').has_function('__init__')
    `)
})
```

The `__init__` method should accept `self`, `name`, and `level` parameters.

```js
({
    test: () => runPython(`
    assert _Node(_code).find_class('Employee').find_function('__init__').has_args('self, name, level')
    `)
})
```

# --seed--

## --seed-contents--

```py
class Employee:
--fcc-editable-region--
    pass
--fcc-editable-region--
```
