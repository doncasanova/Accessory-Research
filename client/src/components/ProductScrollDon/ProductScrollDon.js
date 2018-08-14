import React from "react";
import './ProductScrollDon.css';


export default class ProductScrollDon extends React.Component {
  render() {
    return (

      <div className="donsCSS">
        <nav id="navbar-example2" className="navbar navbar-light bg-light navTest">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#fat">@fat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mdo">@mdo</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#one">one</a>
                <a className="dropdown-item" href="#two">two</a>
                <div role="separator" class="dropdown-divider"></div>
                <a className="dropdown-item" href="#three">three</a>
              </div>
            </li>
          </ul>
        </nav>
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <div id="fat" className="row test1">
            <h4 >
          fat 
            </h4>
            <img className="m-2" src="https://media.giphy.com/media/Jacgl87d9azte/giphy.gif" height = "200px" alt="Office Space Static"></img>
          </div>
          <div id="mdo" className="row test2">
            <h4 id="mdo" className="">
           mdo
            </h4>
            <img className="m-2" src="https://media.giphy.com/media/3ohjV978XBXKrgROSI/giphy.gif" height = "200px" alt="Office Space Static"></img>
            
          </div>
          <div id="one" className="row test3">
            <h4 id="one" className="">
         one
            </h4>
            <img className="m-2" src="https://tse2.mm.bing.net/th?id=OIP.RO7U-jwdpwlzf1SqR7Yx9gHaFj&pid=15.1&P=0&w=215&h=162" height = "200px" alt="Office Space Static"></img>
          </div>
          <div id="two" className="row test4">
            <h4 className="">
             two
            </h4>
            <img className="m-2" src="https://thumbs.gfycat.com/ThreadbareFatJaeger-max-1mb.gif" height = "200px" alt="Office Space Static"></img>
          </div>
          <div id="three" className="row test5">
            <h4  className="">
            three
            </h4>
            <img className="m-2" src="https://38.media.tumblr.com/aa1a5169b4d38b4b83d779b79afbe8e9/tumblr_mkzqk0rXPD1s8yy9co1_500.gif" height = "200px" alt="Office Space Static"></img>
          </div>
        </div >
      </div >
    )
  }
}

