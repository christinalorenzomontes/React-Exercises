import { ItemsProvider } from '../contexts/ItemsContext';
import { SearchProvider } from '../contexts/SearchContext';
import ListView from './ListView';

// Prop driling
// Componentes de presentación y componentes contenedores
function List() {
  return(
    <SearchProvider>
      <ItemsProvider>
        <ListView />
      </ItemsProvider>
    </SearchProvider>
  )
}

export default List;