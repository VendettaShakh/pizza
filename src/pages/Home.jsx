import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { SearchContext } from '../App';



const Home = () => {

const {searchInput, setSearchInput} = React.useContext(SearchContext);
  

const [labelUp, setLabelUp] = React.useState(false)
const [categoryId, setCategoryId] = React.useState(0)
const [sortType, setSortType] = React.useState({name: 'популярности', prop: 'rating'});

const [pizzas, setPizzas] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)



React.useEffect(() => {
setIsLoading(true);
fetch (`https://687e376fc07d1a878c31c535.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}`: ''}&sortBy=${sortType.prop}${searchInput ? `&search=${searchInput}` : ''}&order=${labelUp ? 'asc' : 'desc'}`).
then((Response) => Response.json()).
then((Value) => {
  setPizzas(Value);
  setIsLoading(false)
})
},[categoryId, sortType, labelUp, searchInput])

  return (
    <div>
            <div className="content__top">
                <Categories categoryId={categoryId} setCategoryId={(index) => setCategoryId (index)} />
                <Sort sortType={sortType} setSortType={(index) => setSortType (index)} labelUp={labelUp} setLabelUp={setLabelUp}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{pizzas.map((item, index) => <PizzaBlock key={index} {...item} />)}
            </div>
    </div>
  )
}

export default Home;