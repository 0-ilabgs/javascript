
**Variables**
- **Overview:** This folder demonstrates basic JavaScript variable declarations and behavior using `var`, `let`, and `const` with small example scripts.

**Files:**
- [variables/var.js](variables/var.js) — examples showing `var` scoping, hoisting, and redeclaration.
- [variables/let.js](variables/let.js) — examples showing `let` block scoping and temporal dead zone issues.
- [variables/const.js](variables/const.js) — examples showing `const` immutability for bindings and mutability for object properties.
- [variables/constExersios.js](variables/constExersios.js) — a short exercise file using `const` and demonstrating object mutation.

**Run the examples**
Run any example with Node.js from the workspace root, for example:

```bash
node variables/var.js
node variables/let.js
node variables/const.js
node variables/constExersios.js
```

**Key takeaways**
- `var` is function-scoped (or global); it allows redeclaration and is hoisted (uninitialized until the assignment).
- `let` is block-scoped and prevents redeclaration in the same scope; accessing it before initialization causes a runtime error.
- `const` creates an immutable binding (cannot be reassigned) but does not make objects immutable — object properties can still change.

**Notes about the examples**
- `variables/var.js` shows that variables declared with `var` are hoisted and may produce `undefined` if accessed before assignment; reassignments inside blocks affect the same `var` binding.
- `variables/let.js` shows block scope: a variable defined inside a block is not accessible outside the block (accessing it will throw a ReferenceError).
- `variables/const.js` demonstrates that reassigning a `const` binding is not allowed, while modifying properties of a `const` object is permitted.

If you'd like, I can also add short inline comments inside each example file or combine these into a single demo script.

