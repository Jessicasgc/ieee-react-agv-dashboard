import React from 'react';
import { addItem } from '../../utils/crud_api';

function useAddItem() {
 const [error, setError] = React.useState(null);
 const [loading, setLoading] = React.useState(true);

 async function addingItem({  id_type, item_name }) {
    try {
      setLoading(true);
      const response = await addItem({  id_type, item_name });
      // Do something with the response if needed
      console.log(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { addingItem, loading, error };
}
export default useAddItem;