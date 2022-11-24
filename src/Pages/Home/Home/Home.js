import React from 'react';
import MyTitle from '../../../components/MyTitle/MyTitle';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    return (
        <div>
            <MyTitle>Home</MyTitle>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
        </div>
    );
};

export default Home;