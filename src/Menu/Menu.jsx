import './Menu.css'

const Menu = ( { menuItems, categories, currentFilter } ) => {
    return (
        <div className="menu-items">
            { menuItems.map( ( item ) => {
                return (
                    <div
                        key={ item.idMeal } 
                        id={ item.idMeal } 
                        className="menu-item"
                    >
                        <img 
                            className="menu-item__image" 
                            src={ item.strMealThumb } 
                            alt={ `Photo of ${item.strMeal}` } 
                            width={ 180 } 
                            height={ 180 }
                            loading="lazy"
                            decoding="async"
                        />
                        <h3 className="menu-item__name">{ item.strMeal }</h3>
                    </div>
                )
            } ) }
        </div>
    )
}

export default Menu