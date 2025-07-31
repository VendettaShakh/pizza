import React from 'react'

import axios from 'axios';

import qs from 'qs'

import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { setPizzas } from '../redux/pizzasSlice';

import Categories from '../components/Categories'
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';




const Home = () => {

const categoryId = useSelector (state => state.filterSlice.categoryId)
const sortType = useSelector (state => state.filterSlice.sortType)
const pizzas = useSelector (state => state.pizzasSlice.pizzas)
const dispatch = useDispatch ()
const navigate = useNavigate ()

const {searchInput} = React.useContext(SearchContext);
  

const [labelUp, setLabelUp] = React.useState(false)

// React.useEffect(() => {
//   const queryString = qs.stringify(
//     {
//     categoryId, sortProp: sortType.prop, labelUp
//     }
//   )
//   navigate (`?${queryString}`)
// }, [categoryId, sortType, labelUp, searchInput])

React.useEffect(() => {
axios.get(`https://687e376fc07d1a878c31c535.mockapi.io/pizzas?${categoryId > 0 ? `category=${categoryId}`: ''}&sortBy=${sortType.prop}${searchInput ? `&search=${searchInput}` : ''}&order=${labelUp ? 'asc' : 'desc'}`).
then((Response) => {
 dispatch (setPizzas(Response.data))}
)
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