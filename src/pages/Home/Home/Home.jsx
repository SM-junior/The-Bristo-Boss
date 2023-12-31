import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import BristoBoss from "./BristoBoss/BristoBoss";
import Category from "./Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BristoBoss></BristoBoss>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;