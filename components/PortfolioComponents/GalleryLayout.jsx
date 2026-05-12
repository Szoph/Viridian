'use client';
import Kitchens from './InTabs/Kitchens';
import Staircases from './InTabs/Staircases';
import Wardrobes from './InTabs/Wardrobes';
import BespokeJoinery from './InTabs/BespokeJoinery';
import OutdoorCarpentry from './InTabs/OutdoorCarpentry';
import MediaWalls from './InTabs/MediaWalls';

const GalleryLayout = ({ currentTab }) => {

    const showGallery = () => {
        switch (currentTab) {
            case 0:
                return <MediaWalls />;
                case 1: 
                return <Staircases />;
                case 2: 
                return <Kitchens />;
                case 3: 
                return <BespokeJoinery />;
                case 4: 
                return <OutdoorCarpentry />;
                case 5: 
                return <Wardrobes />;
                default: 
                return <MediaWalls />;
        }
    }

    
    return (
        <div>
            <div
            className='lg:columns-3 md:columns-2 columns-1 gap-3 w-full max-w-[1200px] mx-auto space-y-3 pb-28'>

            
            {showGallery()}
            


            </div>
           
        </div>
    )
}



export default GalleryLayout;