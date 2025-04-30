const FoodCard = ({ item }) => {
    const { image, name, price, categroy, recipe } = item || {}
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
                    <button className="btn btn-outline">Add to cart</button>

                </div>
            </div>
        </div>
    )
}
export default FoodCard;