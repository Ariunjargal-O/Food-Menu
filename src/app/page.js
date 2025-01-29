import Image from "next/image";
import styles from "./page.module.css";

const data = [
  {
    categoryName: "SALADS",
    foods: [
      {
        foodName: "CHICKEN CAESER SALAD",
        price: '24,900₮',
        ingredites: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken",
      },
      {
        foodName: "GREEK SALAD",
        price: '21,900₮',
        ingredites: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
      },
      {
        foodName: "QUINOA POWER SALAD",
        price: '22,900₮',
        ingredites: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing.",
      },
    ]
  },
   {
    categoryName: "BURGERS",
    foods: [
      {
        foodName: "CLASSIC BURGER",
        price: '18,900₮',
        ingredites: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries.",
      },
      {
        foodName: "BBQ BACON BURGER",
        price: '21,900₮',
        ingredites: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings.",
      },
      {
        foodName: "VEGAN BLACK BEAN BURGER",
        price: '17,900₮',
        ingredites: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun.",
      },
    ]
  },
  {
    categoryName: "PASTA",
    foods: [
      {
        foodName: "SPAGHETTI PASTA",
        price: '20,900₮',
        ingredites: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta.",
      },
      {
        foodName: "SEAFOOD MARINARA",
        price: '23,900₮',
        ingredites: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil.",
      },
      {
        foodName: "PESTO CHICKEN PASTA",
        price: '21,000₮',
        ingredites: "Fettuccine pasta with grilled chicken, basil pesto, and cherry tomatoes.",
      },

    ]
  },
  {
    categoryName: "PIZZA",
    foods: [
      {
        foodName: "MARGHERITA PIZZA",
        price: '30,900₮',
        ingredites: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves.",
      },
      {
        foodName: "PEPPERONI FEAST",
        price: '34,900₮',
        ingredites: "Loaded with pepperoni and melted mozzarella on a crispy crust.",
      },
      {
        foodName: "VEGETARIAN DELIGHT",
        price: '29,900₮',
        ingredites: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes.",
      },
    ]
  }
]

function Menulist(props) {
  console.log(props)
  return (

    <div>
      <div className="menu-box">
        <h2>{props.data.categoryName}</h2>
      <div className="list">
        <div>
          <div className="list-flex">
            <h3>{props.data.foods[0].foodName}</h3>
            <h3>{props.data.foods[0].price}</h3>
          </div>
          <p>{props.data.foods[0].ingredites}</p>
        </div>

        <div>
          <div className="list-flex">
            <h3>{props.data.foods[1].foodName}</h3>
            <h3>{props.data.foods[1].price}</h3>
          </div>
          <p>{props.data.foods[1].ingredites}</p>
        </div>

        <div>
          <div className="list-flex">
            <h3>{props.data.foods[2].foodName}</h3>
            <h3>{props.data.foods[2].price}</h3>
          </div>
          <p>{props.data.foods[2].ingredites}</p>
        </div>
      </div>
    </div>
    </div>

  )
}



export default function Home() {
  const menu = [];

  for (let i = 0; i < data.length; i++) {
    menu.push(<Menulist data={data[i]}></Menulist>)
  }
  return (
    <div>
      <h1>pranzo</h1>
      <div className="container">
{menu}
      </div>
    </div>

  );
}
