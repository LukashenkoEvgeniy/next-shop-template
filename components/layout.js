import Header from './header';
import Footer from './footer';
import '../styles/index.scss'

const withLayout = Page => {
    return () => (
        <div>
            <Header />
            <Page />
            <Footer />
        </div>
    );
};

export default withLayout;