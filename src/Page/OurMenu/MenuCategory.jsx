import { Link } from "react-router-dom";
import MenuItem from "../Home/MenuItem";
import Cover from "../Shared/Cover/Cover";

const MenuCategroy = ({ popular,subHeading,heading, title, img, item }) => {
    return (
        <div className="pt-8">
            {
                title && <Cover img={img} title={title}></Cover>
            }
            <div>
                
            </div>
            <div className='grid md:grid-cols-2 gap-7 my-10 mx-20'>
                {
                    item.map((item, index) => <MenuItem key={index} item={item} ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`} className=" btn btn-outline border-0 border-b-2 bg text-xl font-semibold uppercase">Order now</Link>
        </div>
    )
}
export default MenuCategroy;