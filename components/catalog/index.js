import './index.scss'
import Card from "./card";

const Catalog = () => {

    const products = [
        {id: 1, name: 'test', price: 50},
        {id: 2, name: 'test2', price: 52}
    ];


    return (
        <div className="catalog">
            {products.map(product => (
                <Card
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
};

export default Catalog;