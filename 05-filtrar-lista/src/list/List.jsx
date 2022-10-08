import { useState } from 'react';
import singersList from './item';
import ListView from './ListView';

// Componentes de presentación y componentes contenedores

function List() {
  let [items, setItems] = useState(singersList);

  function filterItems(searchPattern) {
    if(searchPattern === "") {
      setItems(singersList);
    } else {
      let newItems = filterItemsBySearchPattern(searchPattern);
      setItems(newItems);
    }
  }

  function filterItemsBySearchPattern(searchPattern) {
    let filterItems = singersList
                      .map( item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null );

    return filterItems;
  }

  return(
    <ListView elements={items} funcFilterItems={filterItems} />
  )
}

export default List;