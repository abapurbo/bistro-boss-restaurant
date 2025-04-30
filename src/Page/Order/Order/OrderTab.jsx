import FoodCard from "../../../Commponents/FoodCard";

const OrderTab = ({item}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                item.map(item => <FoodCard item={item}></FoodCard>)
            }
        </div>
    )
}
export default OrderTab;