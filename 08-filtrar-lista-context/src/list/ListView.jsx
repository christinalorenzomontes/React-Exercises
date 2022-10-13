import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";
import SearchInput from "../form/SearchInput";
import ResultsCount from "./ResultsCount";

function ListView() {
  let elements = useContext(ItemsContext);
  return(
    <>
      <SearchInput />
      <ResultsCount />
      <ul>
        {
          elements.map((name, index) => name && <li key={index}>{name}</li>)
        }
      </ul>
    </>
  );
}

export default ListView;