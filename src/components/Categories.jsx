import React from "react";


const Categories = () => {

const CategoriesPizza = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const [categoryId, setCategoryId] = React.useState(0)




    return (
        <div className="categories">
              <ul>
                {CategoriesPizza.map((item, index) => <li key={index} onClick={() => setCategoryId (index)} className = {categoryId === index ? 'active' : ''}>{item}</li>)}
              </ul>
            </div>
    )
}

export default Categories;