import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setPizzas } from '../redux/pizzasSlice';



const Home = () => {

const categoryId = useSelector (state => state.filterSlice.categoryId)
const sortType = useSelector (state => state.filterSlice.sortType)
const pizzas = useSelector (state => state.pizzasSlice.pizzas)
const dispatch = useDispatch ()

const {searchInput} = React.useContext(SearchContext);
  

const [labelUp, setLabelUp] = React.useState(false)


React.useEffect(() => {
fetch (`https://687e376fc07d1a878c31c535.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}`: ''}&sortBy=${sortType.prop}${searchInput ? `&search=${searchInput}` : ''}&order=${labelUp ? 'asc' : 'desc'}`).
then((Response) => Response.json()).
then((Value) => {
  dispatch (setPizzas(Value));
})
},[categoryId, sortType, labelUp, searchInput])

  return (
    <div>
            <div className="content__top">
                <Categories />
                <Sort labelUp={labelUp} setLabelUp={setLabelUp}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{pizzas.map((item, index) => <PizzaBlock key={index} {...item} />)}
            </div>
    </div>
  )
}

export default Home;