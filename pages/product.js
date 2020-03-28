import withLayout from '../components/layout'
import {useRouter} from "next/router";

const Product = () => {
    const {query} = useRouter();
    console.log(query.id);
    return(
        <div>
            {query.id}
        </div>
    )
};

export default withLayout(Product)
