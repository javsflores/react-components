var GroceryList = (props) => {
  return(
    <div>
        <GroceryListItem items={['Apples', 'Bananas', 'Kale']}/>
    </div>
  )
}

var GroceryListItem = (props) => {

  function bold(e) {
    e.target.style.fontWeight = 900;
  }

  function normal(e) {
    e.target.style.fontWeight = 400;
  }

  return(
    <ul>
      <li onMouseEnter={bold} onMouseLeave={normal}>{props.items[0]}</li>
      <li onMouseEnter={bold} onMouseLeave={normal}>{props.items[1]}</li>
      <li onMouseEnter={bold} onMouseLeave={normal}>{props.items[2]}</li>
    </ul>
  );
}

ReactDOM.render(
  <GroceryList/>,
  document.getElementById('app')
)