---
id: 68b7f5adda89e93c0cb8d1de
title: Step 5
challengeType: 20
dashedName: step-5
---

# --description--

Now let's test your Employee class. Create an instance of the Employee class with the name `'John Doe'` and level `'junior'`, and assign it to a variable called `employee`.

Then print the employee instance to see the `__str__` method in action.

# --hints--

You should create an Employee instance with name `'John Doe'` and level `'junior'`.

```js
({
    test: () => runPython(`
    assert _Node(_code).has_variable('employee')
    employee_var = _Node(_code).find_variable('employee')
    assert 'Employee(' in str(employee_var) and 'John Doe' in str(employee_var) and 'junior' in str(employee_var)
    `)
})
```

You should print the employee instance.

```js
({
    test: () => runPython(`
    print_calls = _Node(_code).find_calls('print')
    assert len(print_calls) >= 1
    assert any('employee' in str(call) for call in print_calls)
    `)
})
```

The employee should display correctly when printed.

```js
({
    test: () => runPython(`
    assert str(employee) == 'John Doe: junior'
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

--fcc-editable-region--

--fcc-editable-region--
```
