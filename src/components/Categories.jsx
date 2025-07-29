import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from '../redux/filterSlice';



const Categories = () => {

const categoryId = useSelector (state => state.filterSlice.categoryId)
const dispatch = useDispatch ()




const CategoriesPizza = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']





    return (
        <div className="categories">
              <ul>
                {CategoriesPizza.map((item, index) => <li key={index} onClick={() => dispatch (setCategoryId (index))} className = {categoryId === index ? 'active' : ''}>{item}</li>)}
              </ul>
            </div>
    )
}

export default Categories;