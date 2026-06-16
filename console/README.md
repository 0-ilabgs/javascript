# JavaScript Console Logging Examples

Simple Node.js examples demonstrating the difference between `console.log`, `console.warn`, and `console.error`.

## What this repo contains

- `log.js` — standard output using `console.log`
- `warn.js` — warning output using `console.warn`
- `error.js` — error output using `console.error`
- `table.js` — table-style output using `console.table`

## Why this is useful

These examples are helpful for:

- learning how Node.js prints messages to the terminal
- understanding the difference between stdout and stderr
- testing how warnings and errors appear in your shell

## Requirements

- Node.js installed (any modern version)

## Usage

Run a single example:

```bash
node log.js
node warn.js
node error.js
```

Run all examples in sequence:

```bash
node log.js && node warn.js && node error.js
```

Capture warnings and errors separately:

```bash
node warn.js 2> warn.txt
node error.js 2> error.txt
```

## Example output

`log.js` prints:

```text
Hello, World!
This is a simple log message.
Logging multiple messages in a single file.
```

`warn.js` prints warning messages and `error.js` prints error messages. Many terminals display these in a different color.

## Notes

- `console.log` writes to standard output (`stdout`)
- `console.warn` and `console.error` write to standard error (`stderr`)
- stderr is useful for warnings and errors so it can be separated from normal output

## Next steps

- add more examples with `console.info`, `console.debug`, or custom formatting
- use these scripts when learning basic Node.js scripting and logging
