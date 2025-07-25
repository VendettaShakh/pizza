import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/Skeleton';


const Home = () => {
const [pizzas, setPizzas] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)



React.useEffect(() => {
fetch ('https://687e376fc07d1a878c31c535.mockapi.io/pizzas').
then((Response) => Response.json()).
then((Value) => {
  setPizzas(Value);
  setIsLoading(false)
})
}, [])

  return (
    <div>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">  {isLoading ? [...new Array(12)].map((_, index) => <Skeleton key={index}/>) : pizzas.map((item, index) => <PizzaBlock key={index} {...item} />)}
            </div>
    </div>
  )
}

export default Home;