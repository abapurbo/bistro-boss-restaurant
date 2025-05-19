import Swal from "sweetalert2"
import AuthUse from "../ShardHook/AuthUse"
import { useLocation, useNavigate } from "react-router-dom"
import AxiosSecuire from "../hook/AxiosSecuire"
import UseCart from "../hook/UseCart"

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item || {}
    const { user } = AuthUse()
    const location = useLocation()
    const navigate = useNavigate()
    const axiosSecurie = AxiosSecuire()
    const [,refetch]=UseCart()
    // add foodCard
    const handleFoodCard = () => {
        if (user && user?.email) {
            const addCart = {
                menuId: _id,
                name: name,
                email: user.email,
                image: image,
                price: price
            }
            axiosSecurie.post('/cart', addCart)
                .then(res => {
                    console.log(res.data.insertedId)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: location.pathname })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="relative">
                <img
                    src={image}
                    alt="Shoes" />
                <span className="absolute badge badge-primary top-2 right-4">${price}</span>
            </figure>
            <div className="card-body">
                <h2 className="card-title text-center">
                    {name}

                </h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleFoodCard} className="btn btn-outline">Add to cart</button>

                </div>
            </div>
        </div>
    )
}
export default FoodCard;