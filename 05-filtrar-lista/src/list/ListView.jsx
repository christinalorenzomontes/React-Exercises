function ListView({elements, funcFilterItems}) {
    return(
        <>
        <input type="text" onChange={ ev => funcFilterItems(ev.target.value) } />
          <ul>
            {
              elements.map((name, index) => name && <li class={index} key={index}>{name}</li>)
            }
          </ul>
        </>
    );
}

export default ListView;