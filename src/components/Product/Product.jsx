import {  useParams } from 'react-router-dom';
import Books from './Books';
import Women from './Women';

const Product = () => {


    let params = useParams();

    // Check the category parameter and render the respective component
    if (params.category === "books") {
      console.log(params,"this is params")
        return <Books />;
    } else if (params.category === "women") {
        return <Women />;
    } else {
        // If the category is not recognized, navigate to a 404 page
        {window.location.href = '/404';}
        return null; // Return null or an alternative component
    }
};

export default Product;
