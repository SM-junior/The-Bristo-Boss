import { Helmet } from "react-helmet-async";
import Cover from '../../Home/shared/Cover/Cover';
import coverImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(items => items.category === 'dessert');
    const soup = menu.filter(items => items.category === 'soup');
    const salad = menu.filter(items => items.category === 'salad');
    const pizza = menu.filter(items => items.category === 'pizza');
    const offered = menu.filter(items => items.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bristo Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title='Our Menu'></Cover>
            <SectionTitle
                subHeading={'dont miss'}
                heading={'todays offer'}
            ></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title="Desserts" img={dessertImg}></MenuCategory>
            <MenuCategory items={salad} title="Salads" img={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title="soups" img={soupImg}></MenuCategory>
            {/* <Cover img={dessertImg} title='Dessert'></Cover>
            <MenuCategory items={dessert}></MenuCategory>
            <Cover img={saladImg} title='Salad'></Cover>
            <MenuCategory items={salad}></MenuCategory>
            <Cover img={pizzaImg} title='Pizza'></Cover>
            <MenuCategory items={pizza}></MenuCategory>
            <Cover img={soupImg} title='Soup'></Cover>
            <MenuCategory items={soup}></MenuCategory> */}
        </div>
    );
};

export default Menu;