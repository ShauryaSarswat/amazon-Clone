import '../../../public/stylesheets/home.css';
import NavBar from '../../common/Navbar';
import Categories from '../../common/categories';
import Carousal from '../../common/carousal';
import HomepageBody from './components/homeBody/homeBody';

const Homepage = () =>{
    return(
        <>
            <NavBar/>
            <Categories/>
            <Carousal/>
            <HomepageBody/>
        </>
    )
}
export default Homepage;

