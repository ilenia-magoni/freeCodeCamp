---
id: 68b7f5adda89e93c0cb8d1dd
title: Step 4
challengeType: 20
dashedName: step-4
---

# --description--

Add a `__str__` method to the Employee class that returns a formatted string showing the employee's name and level.

The method should return a string in the format: `'name: level'` using an f-string.

# --hints--

You should add a `__str__` method to the `Employee` class.

```js
({
    test: () => runPython(`
    assert _Node(_code).find_class('Employee').has_function('__str__')
    `)
})
```

The `__str__` method should return a formatted string using `self.name` and `self.level`.

```js
({
    test: () => runPython(`
    str_method = _Node(_code).find_class('Employee').find_function('__str__')
    return_stmt = str_method.find_return()
    assert 'self.name' in str(return_stmt) and 'self.level' in str(return_stmt)
    `)
})
```

The method should work correctly when called.

```js
({
    test: () => runPython(`
    emp = Employee('John Doe', 'junior')
    assert str(emp) == 'John Doe: junior'
    `)
})
```

# --seed--

## --seed-contents--

```py
class Employee:
    def __init__(self, name, level):
        self.name = name
        self.level = level
--fcc-editable-region--

--fcc-editable-region--
```
