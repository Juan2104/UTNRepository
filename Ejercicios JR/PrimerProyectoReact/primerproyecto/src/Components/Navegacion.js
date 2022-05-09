import React from 'react'
import { Link } from "react-router-dom";
import Delfi13 from '../images/Delfi1.jpg'
import Delfi23 from '../images/Delfi2.jpg'
import Delfi33 from '../images/Delfi3.jpg'
import Delfi43 from '../images/Delfi4.jpg'
import Delfi53 from '../images/Delfi5.jpg'
import Delfi63 from '../images/Delfi6.jpg'

const Navegacion = () => {
  return (
    <div>
        <Link to="/Delfi1">
            <figure>
                <img src={Delfi13} alt="" />
                <figcaption>Delfi1</figcaption>
            </figure>
        </Link>

        <Link to="/Delfi2">
            <figure>
                <img src={Delfi23} alt="" />
                <figcaption>Delfi2</figcaption>
            </figure>
        </Link>
        <Link to="/Delfi3">
            <figure>
                <img src={Delfi33} alt="" />
                <figcaption>Delfi3</figcaption>
            </figure>
        </Link>
        <Link to="/Delfi4">
            <figure>
                <img src={Delfi43} alt="" />
                <figcaption>Delfi4</figcaption>
            </figure>
        </Link>
        <Link to="/Delfi5">
            <figure>
                <img src={Delfi53} alt="" />
                <figcaption>Delfi5</figcaption>
            </figure>
        </Link>
        <Link to="/Delfi6">
            <figure>
                <img src={Delfi63} alt="" />
                <figcaption>Delfi6</figcaption>
            </figure>
        </Link>
   
    </div>
  )
}

export default Navegacion