import '../index.css';
import ReactLogo from './ReactLogo.jsx';

function MadeWithReact() {

    return (
        <>
        <div className="react-chunk">
            <div className="react-logo-div">
                <ReactLogo />
            </div>
            <div id="react-chunk-text">
                <span className="made-with-react">Made with React</span>
                <span className="by-Jay">by Jay Crawford</span>
            </div>
        </div>
        </>
    );
}

export default MadeWithReact