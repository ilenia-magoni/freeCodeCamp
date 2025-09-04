---
id: 68b7f5adda89e93c0cb8d1dc
title: Step 3
challengeType: 20
dashedName: step-3
---

# --description--

Inside the `__init__` method, store the `name` and `level` parameters as instance attributes.

Use `self.name = name` and `self.level = level` to assign the parameters to instance attributes.

# --hints--

The `__init__` method should assign `name` parameter to `self.name`.

```js
({
    test: () => runPython(`
    assert _Node(_code).find_class('Employee').find_function('__init__').has_variable('self.name')
    `)
})
```

The `__init__` method should assign `level` parameter to `self.level`.

```js
({
    test: () => runPython(`
    assert _Node(_code).find_class('Employee').find_function('__init__').has_variable('self.level')
    `)
})
```

The assignments should use the correct parameter names.

```js
({
    test: () => runPython(`
    init_func = _Node(_code).find_class('Employee').find_function('__init__')
    name_assignment = init_func.find_variable('self.name')
    level_assignment = init_func.find_variable('self.level')
    assert name_assignment.is_equivalent('self.name = name')
    assert level_assignment.is_equivalent('self.level = level')
    `)
})
```

# --seed--

## --seed-contents--

```py
class Employee:
    def __init__(self, name, level):
--fcc-editable-region--
        pass
--fcc-editable-region--
```
