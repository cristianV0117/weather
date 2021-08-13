import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <>
          <div className="container col-md-12 mt-5">
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