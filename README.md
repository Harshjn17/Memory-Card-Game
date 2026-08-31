# 🧠 Memory Card Game

A simple **Memory Card Game** built with **React**. The goal is to flip cards and find matching pairs.

🚧 **Status: In Progress**

## 🎮 Features

* 🃏 16 cards with 8 matching pairs
* 🍇 Fruit emoji cards
* 🔄 Flip cards when clicked
* 🚫 Prevent already flipped/matched cards from being clicked
* ⚛️ Built using React state and components
* 🔀 Card initialization using `map()`

## 🛠️ Technologies Used

* React
* JavaScript
* CSS
* Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Card.jsx
│   └── Gameheader.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## 🧩 How It Works

Each card is stored as an object:

```js
{
  id: 0,
  value: "🍇",
  isFlipped: false,
  isMatch: false
}
```

The cards are displayed using `.map()`:

```js
cards.map((card) => {
  return <Card card={card} />;
});
```

When a card is clicked, its `isFlipped` value is changed to `true`.

## 🚧 Currently Working On

* [x] Create 16 cards
* [x] Create 8 matching pairs
* [x] Display cards using `.map()`
* [x] Flip a card when clicked
* [x] Prevent clicking an already flipped card
* [ ] Compare two flipped cards
* [ ] Detect matching pairs
* [ ] Flip unmatched cards back
* [ ] Keep matched cards flipped
* [ ] Add score
* [ ] Add move counter
* [ ] Add restart/new game functionality
* [ ] Add animations
* [ ] Improve responsive design

## 🚀 Future Improvements

* Add a timer
* Add difficulty levels
* Add different card themes
* Add winning screen
* Add sound effects
* Improve mobile experience

## 📌 Status

This project is currently **under development**. More game functionality will be added as I continue building and learning React.
