const GroceryList = (props) => {
  return (
    <div>
      <ul>
        <GroceryListItem item="Apples" quantity="5" unit="apples" />
        <hr></hr>
        <GroceryListItem item="Bananas" quantity="7" unit="bunches"/>
        <hr></hr>
        <GroceryListItem item="Kale" quantity="3" unit="stalks"/>
      </ul>
    </div>
  );
}


/*
  props: {
    item: 'Kale',
    quantity: '3'
    unit: 'package'
  }
*/
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: 'regular';
    }
  }

  render() {
    return <li style={this.state.style}>{this.props.item}: {this.props.quantity} {this.props.unit}</li>;
  }
}

ReactDOM.render(<GroceryList/>, document.getElementById('app'));

