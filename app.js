class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <GroceryListItem item="Apples" quantity="5" unit="apples" />
        <hr></hr>
        <GroceryListItem item="Bananas" quantity="7" unit="bunches"/>
        <hr></hr>
        <GroceryListItem item="Kale" quantity="3" unit="stalks"/>
      </ul>
    );
  }
}

/*
  props: {
    item: 'Kale',
    quantity: '3'
    unit: 'package'
  }
*/
const GroceryListItem = (props) => {
  return <li>{props.item}: {props.quantity} {props.unit}</li>;
}

ReactDOM.render(<GroceryList/>, document.getElementById('app'));

