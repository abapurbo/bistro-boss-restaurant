import Cover from "../../Shared/Cover/Cover";
import Orderimg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../../hook/UseMenu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import OrderTab from "./OrderTab";
const Order = () => {
    const { menu } = UseMenu()
    const categories = ['Salad', 'Pizza', 'Soups', 'Dessert', 'Drinks']
    const { category } = useParams()
 
    const initalIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initalIndex);
    console.log(tabIndex)
    const desserts = menu.filter(item => item.category === 'dessert')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const soups = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div >
            <Helmet>
                <title>Bistor Boss || Order food</title>
            </Helmet>
            <Cover img={Orderimg} title={'order food'}></Cover>
            <div className="flex justify-center my-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>

                        <Tab>SALADS</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>

                    </TabList>

                    <TabPanel>
                        <OrderTab item={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>


        </div>
    )
}
export default Order;