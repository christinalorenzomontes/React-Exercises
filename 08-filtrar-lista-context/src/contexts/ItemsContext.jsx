import { createContext, useContext, useEffect, useState } from "react";
import SingersList from "../list/item";
import { SearchContext } from "./SearchContext";

export const ItemsContext = createContext([]);

export function ItemsProvider({children}) {
    let [items, setItems] = useState(SingersList);
    let { search } = useContext(SearchContext);
  
    useEffect(function(){
      if(!search || search === "") {
        setItems(SingersList);
        return;
      };
      filterItems(search);
    }, [search]);
  
    function filterItems(searchPattern) {
      let newItems = filterItemsBySearchPattern(searchPattern);
      setItems(newItems);
    }
  
    function filterItemsBySearchPattern(searchPattern) {
      let filterItems = SingersList
                        .map( item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null );
      return filterItems;
    }
    return (
      <ItemsContext.Provider value={ items }>
          { children }
      </ItemsContext.Provider>    
    )
}