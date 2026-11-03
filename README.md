# Assignment #6. jQuery (Selectors, Effects, Animations)

**Student:** Nygmet Aiym
**Group:** IT-2514

A small web project that practices the core features of jQuery: selectors, effects, DOM manipulation, animations and a mini project (interactive image gallery).

## Project Structure

```
.
├── index.html   # Page structure for all tasks
├── style.css    # Design and styles (including the .selected class for the gallery)
├── script.js    # All jQuery code, wrapped in $(document).ready()
└── README.md
```

## How to Run

https://nurgulibraeva701-rgb.github.io/jQuery-Selectors-Effects-Animations-/

## Tasks Overview

### Part 1. Getting Started with jQuery
| Task | Description | Methods |
|------|-------------|---------|
| 0. Setup | Connect jQuery from CDN, print "jQuery is ready!" to the console | `$(document).ready()` |
| 1. Selectors & CSS | Select by ID, class and tag; change text, HTML and styles | `.text()`, `.html()`, `.css()` |

### Part 2. jQuery Effects
| Task | Description | Methods |
|------|-------------|---------|
| 2. Visibility | Hide, Show and Toggle a paragraph | `.hide()`, `.show()`, `.toggle()` |
| 3. Fade | Fade an image in and out (600 ms) | `.fadeIn()`, `.fadeOut()`, `.fadeToggle()` |
| 4. Slide | Collapsible panel (500 ms) | `.slideUp()`, `.slideDown()`, `.slideToggle()` |

### Part 3. DOM Manipulation
| Task | Description | Methods |
|------|-------------|---------|
| 5. Add & Remove | List with buttons to add to the end/beginning and remove the last item; a counter numbers new items | `.append()`, `.prepend()`, `.remove()` |
| 6. Attributes | Change an image's `src`/`alt` and a link's `href` | `.attr()`, `.text()` |
| 7. Form Interaction | Name and Email fields shown live below the form on every keystroke | `.val()`, `.text()`, `input` event |

### Part 4. Animations
| Task | Description | Methods |
|------|-------------|---------|
| 8. Basic | Box grows from 55 px to 90 px and moves 180 px right in 700 ms | `.animate()`, `.stop(true)` |
| 9. Sequential | Move right → move down → shrink → return (500 ms each) | chained `.animate()` (queue) |
| 10. Combined | Opacity, size and position changed in one call (900 ms) | `.animate()` |

### Part 5. Mini Project
**Task 11. Interactive Image Gallery**
- Three thumbnails.
- Show/Hide buttons use `.fadeIn()` and `.fadeOut()`.
- Clicking a thumbnail adds the `selected` class (CSS enlarges it and draws an outline) and shows the photo's `alt` text in a message.

```js
$("#gallery img").click(function () {
  $("#gallery img").removeClass("selected");
  $(this).addClass("selected");
  $("#galleryMessage").text("Selected photo: " + $(this).attr("alt"));
});
```

## Key Takeaways

- `hide/show/toggle` change visibility, `fade*` methods change opacity, `slide*` methods change height.
- Chaining several `.animate()` calls creates a queue, so each step starts after the previous one finishes.
- `.stop(true)` prevents animations from stacking when a button is clicked many times.
- Separating structure (HTML), design (CSS) and behavior (JS) keeps the project clean.

## Testing

Every task was tested in the browser, and the console was checked for errors. The main difficulty was animation timing, solved with the animation queue and fixed durations.

## Technologies

- HTML5
- CSS3
- JavaScript
- jQuery (via CDN)
