import "./CategoriesVeg.css"
import Data from "../../data/CategoriesVegData/CategoriesVesdata"
import VegCard from "../../components/VegCard/VegCard"
import headerimg from "./header-img.jpg"
import Navbar from "../../components/Navbar/Navbar"

function CategoriesVeg() {

  return (
    <>
    <Navbar/>
    <img src={ headerimg} className="header-img"/>

      <div className="veg-container">

        {Data.map((blogObject, i) => {
          const {
            id,
            title,
            image,
            description,
            time
          
          } = blogObject

          return (<VegCard title={title} image={image} description={description} time={time} id={id}/>)
        })}
      </div>

    </>
  )
}

export default CategoriesVeg

