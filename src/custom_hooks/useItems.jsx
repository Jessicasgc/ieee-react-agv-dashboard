import React from 'react';
import { getItems } from '../utils/crud_api';

function useItems() {
 const [items, setItems] = React.useState([]);
 const [loading, setLoading] = React.useState(true);

 React.useEffect(() => {
    getItems().then(({item}) => {
      setItems(item);
      setLoading(false);
    })
 }, []);

 return { items, loading };
}
export default useItems;