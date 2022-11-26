import React, { useEffect, useState } from 'react';
import MyTitle from '../../../components/MyTitle/MyTitle';
import AdvertiseItems from '../AdvertisedItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import Offerings from '../Offerings/Offerings';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    const [advertisedPhones, setAdvertisedPhones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertisedPhones')
            .then(res => res.json())
            .then(data => setAdvertisedPhones(data));
    }, []);

    return (
        <div>
            <MyTitle>Home</MyTitle>
            <Banner></Banner>
            {
                advertisedPhones.length > 0 && <AdvertiseItems advertisedPhones={advertisedPhones}></AdvertiseItems>
            }
            <ProductCategories></ProductCategories>
            <Offerings></Offerings>
        </div>
    );
};

export default Home;