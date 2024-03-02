import PropTypes from 'prop-types';

const Head = ({ email }) => {

    const today = `${new Date().getDate()} ${new Date().toLocaleString('default', { month: 'long' })}`;
    const mailto = "mailto:" + email;

    return (
        <nav className="flex flex-col justify-between px-1 py-1 bg-slate-900 top-0 z-20 w-full shadow-lg">
            <div className="flex justify-between">
                <h2 className="text-gray-700 font-mono font-bold text-[22px] subpixel-antialiased">Uday Tiwari [<a href={mailto} className="hover:drop-shadow-glow">{email}</a>]</h2>
                <h2 className="max-[590px]:invisible text-gray-700 font-mono font-bold text-[22px] subpixel-antialiased">[{today}]</h2>
            </div>

            <div className="flex justify-start space-x-7 text-[19px] subpixel-antialiased text-yellow-500 list-none">
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Projects</a></li>
            </div>
        </nav>
    )
}

Head.propTypes = { email: PropTypes.string }

export default Head;
