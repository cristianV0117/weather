import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
    return (
        <> 
            <header className="cardeable blog-header py-3 bg-dark ">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1 text-center">
                        <h4>
                            <strong>
                                <FontAwesomeIcon icon={faGithub} />
                                <a href="https://github.com/cristianV0117/weather" className="ml-5">
                                    Repositorio
                                </a>
                            </strong>
                        </h4>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Nav