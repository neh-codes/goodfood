import { useState } from "react";
import "./styles.css";

var foodDatabase = {
  Thai: [
    {
      name: "Pad Thai Noodles",
      ingredients: "Flat noodles, Tofu, Eggs, Beansprouts and Sauces."
    },
    {
      name: "Thai Green Chicken Curry",
      ingredients: "Coconut Milk, Onions, Lime Leaves, Basil Leaves"
    },
    {
      name: "Guay Teow (Noodle Soup)",
      ingredients:
        "Rice noodles, Wontons or Meatballs, Sugar, Dried chilli peppers, Lime juice, and Fish sauce"
    },
    {
      name: "Som Tam (Papaya Salad)",
      ingredients: "Green papaya, Garlic, Cherry tomatoes, Spices"
    },
    {
      name: "Tom Yum Goong (Spicy Shrimp Soup)",
      ingredients:
        "Fresh Prawns, Lemongrass, chilli, galangal, kaffier lime leaves, shallots"
    }
  ],

  Chinese: [
    {
      name: "Manchurian",
      ingredients: "Soya Sauce, Onions, Spices, Vegetables"
    },
    {
      name: "Spring Rolls",
      ingredients: "Sshredded veggies, Onions, Spices"
    },
    {
      name: "Noodles",
      ingredients: "Noodles, Sauces, Cabbage, Carrot"
    },
    {
      name: "Chicken Lollipops",
      ingredients: "Chicken Wings, Eggs, Oil, Spices"
    },
    {
      name: "Stir Fried Tofu with Rice",
      ingredients: "Tofu, Rice, Oil, Spices, Vegetables"
    }
  ],

  Italian: [
    {
      name: "Pizza",
      ingredients: "Cheese, Baking powder, Olive Oil, Vegetables"
    },
    {
      name: "Risotto",
      ingredients: "Parmesan, Onion, Olive Oil, Vegetables, Fresh seafood"
    },
    {
      name: "Pasta",
      ingredients: "Pasta, Garlic, Olive Oil, Pepper"
    },
    {
      name: "Lasagna",
      ingredients:
        "Flat Pasta Noodles, Tomato, Mozzarella, Garlic, Olive Oil, Pepper"
    },
    {
      name: "Tiramisu",
      ingredients: "Eggs, Sugar, Cheese, Cocoa powder"
    }
  ]
};
var cuisines = Object.keys(foodDatabase);

export default function App() {
  var [cuisine, setCuisine] = useState("Thai");

  function onClickHandler(cuisine) {
    setCuisine(cuisine);
  }
  return (
    <div className="App">
      <h1>
        <strong>
          Good Food!<span role="img">🍕🍝</span>
        </strong>
      </h1>
      <div>
        Check out the most famous dishes of the top cuisines in the world!
        Select A Cusine.
      </div>
      {cuisines.map(function (cuisine) {
        return (
          <button
            style={{
              padding: "1% 2%",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "inline-block",
              border: "none",
              margin: "10px",
              backgroundColor: "#f4f4f4",
              borderRadius: "25px",
              boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)"
            }}
            onClick={() => onClickHandler(cuisine)}
          >
            {cuisine}
          </button>
        );
      })}
      <hr></hr>
      <div style={{ textAlign: "center", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {foodDatabase[cuisine].map((nameOfCuisine) => (
            <li
              key={nameOfCuisine.name}
              style={{
                listStyle: "none",
                border: "0.5px #f3f3f3 solid",
                padding: "1rem",
                width: "100%",
                borderRadius: "1rem",
                backgroundColor: "#f4f4f4",
                margin: "1rem 40%",
                boxShadow: "0 2px 10px rgba(44, 40, 14, 0.15)"
              }}
            >
              <div>{nameOfCuisine.name}</div>
              <hr></hr>
              <div style={{ fontSize: "0.7rem" }}>
                Ingredients : {nameOfCuisine.ingredients}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
