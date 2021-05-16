import React from 'react';
import './main.css'

class MyPage extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode: "light",
      info: {}
    }
  }

  changeColor=()=>{
    var target=document.querySelector('body');
    if(this.state.mode==="light"){
        target.style.color='white';
        target.style.backgroundColor='black';
        this.setState({mode:"dark"});
    }
    else{
        target.style.color='black';
        target.style.backgroundColor='white';
        this.setState({mode:"light"});
    }
  }

  showMore=()=>{
    document.querySelector('.more').style.display="block";
  }

  fetchData=()=>{
    document.querySelector('#fetchButton').style.display="none";
    fetch('http://localhost:8000')
    .then(res=>res.json())
    .then(info=>{
      this.setState({info});
    })
  }

  handleSubmit=(e)=>{
    alert("submit first_name: "+this.state.first_name+", last_name: "+this.state.last_name);
  }

  handleChange=(e)=>{
    var name=e.target.name;
    var value=e.target.value;
    console.log(name,value);
    this.setState({[name]:value})
  }

  render(){
    return(
      <div className="mainPage">
        <h1>About me</h1>
      <p> Welcome to Front-End Seminar 2021 Spring! My name is Sungbin Shin</p>
      <h3> My Hobbies </h3>
      <ol>
          <li> Watching baseball games </li>
          <li> Watching movies </li>
          <li> Listening to music </li>
      </ol>
      <h3> I'm interested in... </h3>
      <ul>
          <li> Machine Learning </li>
          <li> Computer Vision </li>
          <li> Investments </li>
      </ul>
      <a href="./movies">Movie</a> <br/> 
      <a href="https://www.youtube.com/watch?v=TDe1DqxwJoc" target="_blank">Song</a>
      <div className="more">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
        id est laborum.
      </div>
      <div className="buttons">
        <button onClick={this.changeColor}> Click to change color</button>
        <button onClick={this.showMore}> Click to see more contents</button>
      </div>
      <div className="form">
          <form onSubmit={this.handleSubmit} method="get">
              <input type="text" name="first_name" onChange={this.handleChange}/>
              <input type="text" name="last_name" onChange={this.handleChange}/>
              <input type="submit" value="Submit"/>
              <ul>
                <li>{this.state.first_name}</li>
                <li>{this.state.last_name}</li>
              </ul>
          </form>
      </div>
      <div className="fetch">
          <button id="fetchButton" onClick={this.fetchData}> Click to fetch data</button>
          <ul>
            <li> University: {this.state.info.university} </li>
            <li> Group: {this.state.info.group} </li>
            <li> Seminar: {this.state.info.seminar} </li>
          </ul>
      </div>
    </div>
    )
  }
}

export default MyPage;
