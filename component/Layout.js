import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <body className="flex flex-col h-screen">
                <Navbar />
                    <main>
                        { children }
                    </main>
                <Footer />
            </body>
        </div>
    );
}
 
export default Layout;