import '../../../public/stylesheets/categories.css';
import {categories} from '../categories/config/categories';

const Categories = () => {
    return (
        <div className="nav-categories">
            {
                categories.map((cat)=>{
                    return(<a key={cat.id}>{cat.name} {cat.fresh?.name}</a>);
                })
            }
        </div>
    )
}

export default Categories;