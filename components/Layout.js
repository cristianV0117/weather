import Footer from './Footer'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <>
          <Nav />
          <div className="container col-md-12">
              {children}
          </div>
          <Footer />
            <style jsx global>{`
	        #__next {
	          min-height: 100vh;
	          display: flex;
	          flex-direction: column;
	          justify-content: space-between;
	        }
	      `}</style>
        </>
    )
}
export default Layout;