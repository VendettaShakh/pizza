import React from "react";


const Categories = ({ categoryId, setCategoryId }) => {

  console.log (categoryId)

const CategoriesPizza = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']





    return (
        <div className="categories">
              <ul>
                {CategoriesPizza.map((item, index) => <li key={index} onClick={() => setCategoryId(index)} className = {categoryId === index ? 'active' : ''}>{item}</li>)}
              </ul>
            </div>
    )
}

export default Categories;