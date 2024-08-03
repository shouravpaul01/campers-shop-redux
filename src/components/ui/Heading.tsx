import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Heading = ({headingTitle}:{headingTitle:string}) => {
  return (
    <div className="flex items-center">
        <p className="flex-1 text-xl md:text-2xl font-bold">
          {headingTitle}
        </p>
        <Link to={"/products"} className="flex items-center gap-2 font-bold text-deepgreen">
          View More<FaArrowRightLong className="animate-bounceLR " />
        </Link>
      </div>
  )
}

export default Heading
