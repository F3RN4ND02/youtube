import React, {Component} from "react";
import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import axios from "axios";

<<<<<<< HEAD
=======
const api = axios.create({
  baseURL: 'https://api.github.com/users/F3RN4ND02/repos'
})


>>>>>>> 66f542b275be94fc509f93d0e73dd2e412538a57
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
<<<<<<< HEAD
        {this.state.rep.map(rep => <Product key={rep.id} link={rep.html_url} name={rep.name} language={rep.language} pushed={rep.pushed_at} />)}
=======
        {this.state.rep.map(rep => <Product key={rep.id} link={rep.html_url} name={rep.name} created={rep.created_at} about={rep.description} pushed={rep.pushed_at} />)}
      {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}  />
        ))}
>>>>>>> 66f542b275be94fc509f93d0e73dd2e412538a57
      </div>
    </div>
    )
  }
    
}
<<<<<<< HEAD

export default Productss
=======

export default Productss
/*
async getData() {
/*axios.get('https://api.github.com/users/F3RN4ND02/repos')
.then(res => {
  console.log(res.data)
  return res.data
})
var rep
axios({
  method: 'get',
  url: 'https://api.github.com/users/F3RN4ND02/repos',
})
  /*.then(function (response) { 
    rep = response.data.slice(-6)
    console.log(rep)
    rep.forEach(element => console.log(element.name)
  );
  });*/

>>>>>>> 66f542b275be94fc509f93d0e73dd2e412538a57
