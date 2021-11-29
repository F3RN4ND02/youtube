import React, {Component} from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import axios from "axios";

class Productss extends Component {
  
  state = {
    rep: []
  }

  constructor() {
    super();
    axios.get('https://api.github.com/users/F3RN4ND02/repos').then(res => {
      console.log(res.data.slice(-6))
      this.setState({ rep:res.data.slice(-6)})
    })
  }
  
  render() {
    return (
      <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">You can go to my github profile or get my latest 6 repos</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {this.state.rep.map(rep => <Product key={rep.id} link={rep.html_url} name={rep.name} language={rep.language} pushed={rep.pushed_at} />)}
      </div>
    </div>
    )
  }
    
}

export default Productss