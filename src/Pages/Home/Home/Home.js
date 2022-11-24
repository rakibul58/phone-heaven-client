import React from 'react';
import MyTitle from '../../../components/MyTitle/MyTitle';
import AdvertiseItems from '../AdvertisedItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <MyTitle>Home</MyTitle>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <ProductCategories></ProductCategories>
            <Offerings></Offerings>
        </div>
    );
};

export default Home;