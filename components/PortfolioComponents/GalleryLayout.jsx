'use client';
import Kitchens from './InTabs/Kitchens';
import Staircases from './InTabs/Staircases';
import Wardrobes from './InTabs/Wardrobes';
import Flooring from './InTabs/Flooring';
import External from './InTabs/External';
import Other from './InTabs/Other';

const GalleryLayout = ({ currentTab }) => {

    const showGallery = () => {
        switch (currentTab) {
            case 0:
                return <Kitchens />;
                case 1: 
                return <Staircases />;
                case 2: 
                return <Wardrobes />;
                case 3: 
                return <Flooring />;
                case 4: 
                return <External />;
                case 5: 
                return <Other />;
                default: 
                return <Kitchens />;
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