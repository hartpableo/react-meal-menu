import './Categories.css'

const Categories = ( { categories, setFilter, currentFilter } ) => {    
    return (
        <div className='btn-group'>
            { categories.map( ( cat ) => {
                return (
                    <button
                        key={ cat.idCategory }
                        className={ `btn ${( currentFilter === cat.strCategory ) ? 'is-active' : ''}` }
                        type='button'
                        aria-label={ `Category: ${cat.strCategory}` }
                        onClick={ () => setFilter( cat.strCategory ) }
                    >{ cat.strCategory }</button>
                )
            } ) }
        </div>
    )
}

export default Categories