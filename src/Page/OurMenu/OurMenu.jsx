import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../assets/menu/pizza-bg.jpg'
import pizzaImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import UseMenu from "../../hook/UseMenu";
import MenuCategroy from "./MenuCategory";
import SectionTitle from "../../Commponents/SectionTitle";
import MenuItem from "../Home/MenuItem";
const OurMenu = () => {
    const { menu } = UseMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <div className=" mb-16">
            <Helmet>
                <title>Bistro Menu | Our menu</title>
            </Helmet>
            <Cover img={menuImg} title={'our menu'}></Cover>
            <SectionTitle heading="today's offers" subHeading="don't miss"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-7 my-10 mx-20'>
                {
                    popular.map((item, index) => <MenuItem key={index} item={item} ></MenuItem>)
                }
            </div>
            <MenuCategroy title={'Dessert'} img={dessertimg} item={desserts}></MenuCategroy>
            <MenuCategroy title={'Salad'} img={saladImg} item={salads}></MenuCategroy>
            <MenuCategroy title={'Pizza'} img={pizzaImg} item={pizzas}></MenuCategroy>
            <MenuCategroy title={'Soup'} img={soupImg} item={soups}></MenuCategroy>
        </div>
    )
}
export default OurMenu;