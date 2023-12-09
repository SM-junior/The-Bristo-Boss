import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import shopImg from '../../assets/shop/shop.jpg'
import Cover from '../Home/shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import ShopCategory from './ShopCategory';
import { useParams } from 'react-router-dom';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category}=useParams()
    console.log(category);
    const desserts = menu.filter(items => items.category === 'dessert');
    const soups = menu.filter(items => items.category === 'soup');
    const salads = menu.filter(items => items.category === 'salad');
    const pizzas = menu.filter(items => items.category === 'pizza');
    const drinks = menu.filter(items => items.category === 'drinks');

    return (
        <div>
            <Cover img={shopImg} title='Our shop'></Cover>
            <div className='py-5'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='text-center uppercase mb-4'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>sops</Tab>
                        <Tab>desserts</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <ShopCategory items={salads}></ShopCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShopCategory items={pizzas}></ShopCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShopCategory items={soups}></ShopCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShopCategory items={desserts}></ShopCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShopCategory items={drinks}></ShopCategory>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;