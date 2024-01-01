import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import useCart from '../../hooks/useCart';

const ShopCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(authContext);
    const [cart, refetch]=useCart()

    const handleAddCart = (item) => {
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            console.log(cartItem);
            fetch('http://localhost:3000/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            icon: "success",
                            title: "Food is added successful",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
    }
    return (
        <div className="card w-76 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className='absolute right-0 me-4 mt-4 px-1 bg-black text-white'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <div className="card-actions">
                    <button onClick={() => handleAddCart(item)} className="btn hover:text-orange-400 hover:border-orange-400 hover:bg-slate-700 uppercase border-0 border-b-2 border-orange-500 text-black mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;