import PropTypes from 'prop-types';

const Head = ({ email }) => {

    return (
        <nav>
            <div>
                <h2><a href={"mailto:" + email}>Uday Tiwari</a></h2>
                <div>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Weblogs</a></li>
                    <li><a href="#">Projects</a></li>
                </div>
            </div>
        </nav>
    )
}

Head.propTypes = { email: PropTypes.string }

export default Head;
