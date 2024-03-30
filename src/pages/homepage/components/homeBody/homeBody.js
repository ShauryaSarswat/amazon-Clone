import {girdInfo} from '../../config/gridInfo';
import GridCard from '../grid'
import '../../../../../public/stylesheets/home.css';

const HomepageBody = () => {
    return(
        <div className='grid-layout'>
            {
                girdInfo.map((info)=>{
                    return (
                        <GridCard key={info.id} data={info} />
                    )
                })
            }
        </div>
    )
}

export default HomepageBody;