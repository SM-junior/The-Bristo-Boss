import React from 'react';
import ShopCard from './ShopCard';

const ShopCategory = ({items}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6'>
            {
                items.map(item =>
                    <ShopCard
                        key={item._id}
                        item={item}
                    ></ShopCard>
                )
            }
        </div>
    );
};

export default ShopCategory;