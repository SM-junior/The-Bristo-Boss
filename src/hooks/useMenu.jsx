import { useEffect, useState } from 'react';

const useMenu=()=>{
    const [popularItems, setPopularItems] = useState([]);
    const [loading, setLoading]=useState(true)

    useEffect(() => { 
        fetch('http://localhost:3000/menu')
            .then(res => res.json())
            .then(data => setPopularItems(data))
            setLoading(false)
            
    }, [])
    return [popularItems,loading];
}
export default useMenu;