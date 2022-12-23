import React, { useEffect, useState } from 'react';
import MyTitle from '../../../components/MyTitle/MyTitle';
import AdvertiseItems from '../AdvertisedItems/AdvertiseItems';
import Banner from '../Banner/Banner';
import FAQ from '../FAQ/FAQ';
import Offer from '../Offer/Offer';
import Offerings from '../Offerings/Offerings';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    const [advertisedPhones, setAdvertisedPhones] = useState([]);

    useEffect(() => {
        fetch('https://mobile-heaven-server.vercel.app/advertisedPhones')
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
            <FAQ/>
            <Offer></Offer>
        </div>
    );
};

export default Home;