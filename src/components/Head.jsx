import PropTypes from 'prop-types';

const Head = ({ email }) => {

    return (
        <nav className="flex flex-col flex-wrap justify-between px-1 py-1 top-0 bg-stone-900 w-full content-center last:shadow-lg">
            <div className="flex flex-wrap justify-between">
                <h2 className="text-gray-700 font-press-start text-[15px] subpixel-antialiased">Uday Tiwari <a href={"mailto:" + email} className="font-press-start text-sm hover:drop-shadow-glowOrange">[{email}]</a></h2>
            </div>

            <div className="flex font-press-start justify-evenly text-[15px] subpixel-antialiased text-yellow-700 list-none bg-stone-700">
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Projects</a></li>
            </div>
        </nav>
    )
}

Head.propTypes = { email: PropTypes.string }

export default Head;
