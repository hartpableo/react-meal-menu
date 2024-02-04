import React, { useState, useEffect } from 'react'
import Categories from './Categories/Categories'
import Menu from './Menu/Menu'
import './App.css'

const App = () => {
  const [ data, setData ] = useState( null )
  const [ filter, setFilter ] = useState( null )
  const [ menuItems, setMenuItems ] = useState( null )

  useEffect( () => {
    fetch( 'https://www.themealdb.com/api/json/v1/1/categories.php' )
      .then( response => response.json() )
      .then( data => setData( data ) )
      .catch( error => console.log( 'Error with fetching data: ', error ) )
  }, [] )

  useEffect( () => {
    if ( filter ) {
      fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filter}` )
        .then( response => response.json() )
        .then( items => setMenuItems( items ) )
        .catch( error => console.log( 'Error with fetching filtered data:', error ) )
    }
  }, [ filter ] )

  return (
    <>
      <div className="container">
        <h1 className='title'>Restaurant Menu</h1>
        { ( data && data.categories ) &&
          <Categories 
            categories={ data.categories }
            setFilter={ setFilter } 
            currentFilter={ filter } 
          />
        }
        { menuItems && menuItems.meals && (
          <Menu 
            menuItems={ menuItems.meals }
            categories={ data.categories ?? null }
            currentFilter={ filter } 
          />
        ) || (
          <div className='placeholder'>
            <h2>Pick a category</h2>
          </div>
        ) }
      </div>
    </>
  )
}

export default App
