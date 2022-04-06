import React, { Component } from 'react';

//import logo from './logo.svg';
import Card from './MyComponents/card.jsx';
import './MyComponents/styling.css';
import Button from './MyComponents/button.jsx';
import Text from './MyComponents/text.jsx';
import Footer from './MyComponents/footer.jsx'



//import './App.scss';
import './MyComponents/styling.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('http://localhost:9000/Task')
      .then(res => res.json())
      .then(json => {
        console.log("Data fetched", json)
        this.setState({
          isLoaded: true,
          items: json,

        })
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    console.log("Items", items.map((val) => {
      // console.log("Title", val.title)

    }))

    if (!isLoaded) {
      return <div>Loading...</div>
    }

    else
      return (
        <>
          <br />
          <div className='shape1'></div>
          <br />
          <div className='shape'></div>
          <br />
          <h2>EquipRental</h2>
          <h4>This site helps you rent your products</h4>


          <Button title="Rent your Products" />
          <Button title="Create new Account" />

          <Text title="CNIC" />
          <br />
          <Text title="Password" />
          <br />
          <Button title="Login" />

          <div>
            {items.map(item => (
              <div key={item.id}> <Card title={item.title}
                price={item.price}
                description={item.description}
                imgsrc={item.Link} />
              </div>
            ))}
          </div>
          <Footer />
        </>
      );
  }
}

export default App;
