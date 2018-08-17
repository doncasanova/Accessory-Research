import React from "react";
import './ProductScrollChuck.css';
import Products from "../../components/AllProducts";


export default class ProductScrollChuck extends React.Component {
  render() {
    return (

      <div className="chucksCSS">
        {/* <nav id="navbar-example2" className="navbar navbar-light bg-light navTest">
          <a className="navbar-brand" href="open">Navbar</a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#fat">@fat</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mdo">@mdo</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="open" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#one">one</a>
                <a className="dropdown-item" href="#two">two</a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#three">three</a>
              </div>
            </li>
          </ul>
        </nav> */}
        <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
          <div id="fat" className="row chuck-test1">
            <p className="mission-statement">
              Accessory Research
            </p>
            <p className="mission-statement">
              Your Anti-Static Solution
            </p>
            {/* <img className="m-2" src="https://media.giphy.com/media/Jacgl87d9azte/giphy.gif" height="200px" alt="Office Space Static"></img> */}
          </div>
          <div id="mdo" className="row chuck-test2">
            <h4 id="mdoh" className="">
              <Products family="HD"/>
            </h4>
            <img className="m-2" src="https://www.siemens.com/global/en/home/markets/machinebuilding/packaging-machines/_jcr_content/superintroduction/intro-standard/introduction/image.adapt.596.high.jpg/7533-verpackung-layer-vhf3665-highres-srgb.jpg" height="200px" alt="Office Space Static"></img>

          </div>
          <div id="one" className="row chuck-test3">
            <h4 id="one" className="">
              <Products family="Plastic"/>
            </h4>
            <img className="m-2" src="https://i.pinimg.com/736x/fa/81/11/fa8111aa25ac0d72d797d10b18051f71--linocut-tutorial-stamp-carving.jpg" height="200px" alt="Office Space Static"></img>
          </div>
          <div id="two" className="row chuck-test4">
            <h4 className="">
              <Products family="Film"/>
            </h4>
            <img className="m-2" src="http://www.francescocattutophotographer.com/wp-content/uploads/2017/12/fujiflex_detail_opti.jpg" height="200px" alt="Office Space Static"></img>
          </div>
          <div id="three" className="row chuck-test5">
            <h4 className="">
              <Products family="Screen"/>
            </h4>
            <img className="m-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqW1BMu9cNr8Q9guGskKuZnvHZwjMBelZfucO-jqddCrjCvHKyw" height="200px" alt="Office Space Static"></img>
          </div>
          <div id="four" className="row chuck-test6">
            <h4 className="">
              <Products family="Glass"/>
            </h4>
            <img className="m-2" src="data:image/jpeg;base64,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" height="200px" alt="Office Space Static"></img>
          </div>
        </div >
      </div >
    )
  }
}

