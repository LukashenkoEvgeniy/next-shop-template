import './index.scss'
import {addProduct, removeProduct} from "../../../redux/actions/cart";
import {connect} from "react-redux";
import Icon from "../../common/icons";


const Cart = ({count, incrementCounter}) => (
    <div className="header-cart">
        <Icon  name={'cart'} />
        <div onClick={incrementCounter} className="header-cart__badge">
            {count}
        </div>
    </div>
);


const mapStateToProps = state => {
    return ({
        count: state.cart.count
    });
};

const mapDispatchToProps = {
    incrementCounter: addProduct,
    decrementCounter: removeProduct,
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);