import './index.scss';
import Link from "next/link";

const Card = ({product}) => {
    return (
        <Link href={`/product?id=${product.id}`}>
            <div className="product-card">
                <img
                    className="product-card__img"
                    src="https://komilfo.ua/wp-content/uploads/2018/09/IMG_2229e-247x247.jpg" alt=""
                />

                {product.name}
            </div>
        </Link>
    )
};

export default Card;