import withLayout from '@/components/layout'
import useSWR from 'swr';
import Catalog from "@/components/catalog";

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

const Page = ({}) => {
    const {data, error} = useSWR('/api/quote', fetcher);
    if (!data) {
        return (
            <div>'Loading'</div>
        )
    }
    return (
        <>
            <Catalog />
        </>
    )
};


export default withLayout(Page);
