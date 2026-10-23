# Math Equations

A small interactive math app for exploring an equation with a visual balance scale. The current screen shows one fixed puzzle:

**2 boxes + 3 counters = 13 counters**

The scale shows two `x`-marked boxes and three counters balancing thirteen counters. At present, the app asks you to identify the displayed quantities; it does not ask you to solve for the value of `x`.

## Run the app

You need Node.js and npm installed.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. To make a production build, run:

```sh
npm run build
```

## Use the puzzle

Enter a value in each of the three number fields:

- **boxes** — the number of `x`-marked boxes
- **count** — the value of the counters added to the boxes
- **sum** — the total on the other side of the scale

The app checks each field as you type. A green border means the value matches the current puzzle; a red border means it does not; an empty field has a blue border. There is no submit button.

For the displayed puzzle, the correct entries are:

| Field | Value |
| --- | ---: |
| boxes | 2 |
| count | 3 |
| sum | 13 |

## Current scope

The scale and equation are currently fixed to the first puzzle. Although additional puzzles are defined in the source, the app does not yet provide a way to select or advance to them. Answers are checked independently per field; the app does not currently explain the solution or show a completion state.
