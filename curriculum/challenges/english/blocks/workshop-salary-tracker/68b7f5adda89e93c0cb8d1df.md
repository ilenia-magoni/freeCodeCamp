---
id: 68b7f5adda89e93c0cb8d1df
title: Step 6
challengeType: 20
dashedName: step-6
---

# --description--

One problem with public attributes is that they can be modified directly from outside the class. Try changing the employee's name after creation by assigning a new value to `employee.name`.

Change the name to `"Jane Doe"` and print the employee again to see the change.

# --hints--

You should modify `employee.name` to change it to `"Jane Doe"`.

```js
({
    test: () => runPython(`
    assert 'employee.name' in _code and 'Jane Doe' in _code
    `)
})
```

You should print the employee after the name change.

```js
({
    test: () => runPython(`
    print_calls = _Node(_code).find_calls('print')
    assert len(print_calls) >= 2
    `)
})
```

The employee name should be successfully changed.

```js
({
    test: () => runPython(`
    assert employee.name == 'Jane Doe'
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
    
    def __str__(self):
        return f'{self.name}: {self.level}'

employee = Employee('John Doe', 'junior')
print(employee)
--fcc-editable-region--

--fcc-editable-region--
```
