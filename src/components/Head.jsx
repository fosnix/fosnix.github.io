import PropTypes from 'prop-types';
import '../styles/Head.css';

const Head = ({ email }) => {

    return (
        <nav className='navbar'>
            <div className='links'>
                <div className='profile'>
                    <img src="src/assets/profile.webp" alt="Profile" />
                </div>
                <div className='name'>
                    <a href="">
                        <h3>Uday Tiwari</h3>
                    </a>
                    <a href={"mailto:" + email}>Contact</a>
                </div>
                <ul className='weblinks'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Weblogs</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="https://www.x.com/udy1337" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                        <path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z" />
                    </svg></a></li>
                    <li><a href="https://www.github.com/fosnix" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="1.05em" height="1em" viewBox="0 0 25 24">
                        <path fill="currentColor" d="M12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031a12.351 12.351 0 0 1 4.449 4.422l.031.058a12.182 12.182 0 0 1 1.654 6.166c0 5.406-3.483 10-8.327 11.658l-.087.026a.724.724 0 0 1-.642-.113l.002.001a.624.624 0 0 1-.208-.466v-.014v.001l.008-1.226q.008-1.178.008-2.154a2.844 2.844 0 0 0-.833-2.274a10.918 10.918 0 0 0 1.718-.305l-.076.017a6.508 6.508 0 0 0 1.537-.642l-.031.017a4.52 4.52 0 0 0 1.292-1.058l.006-.007a4.9 4.9 0 0 0 .84-1.645l.009-.035a7.888 7.888 0 0 0 .329-2.281l-.001-.136v.007l.001-.072a4.73 4.73 0 0 0-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479a4.25 4.25 0 0 0-.404-1.814l.011.026a2.095 2.095 0 0 0-1.31.181l.012-.005a8.622 8.622 0 0 0-1.512.726l.038-.022l-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433a9.103 9.103 0 0 0-1.272-.595l-.066-.022A2.174 2.174 0 0 0 5.837 5.1l.013-.002a4.2 4.2 0 0 0-.393 1.788c0 .531.097 1.04.275 1.509l-.01-.029a4.723 4.723 0 0 0-1.265 3.303v-.004l-.001.13c0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013a4.35 4.35 0 0 0 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012a3.056 3.056 0 0 1-.699.236l-.021.004c-.256.051-.549.08-.85.08h-.066h.003a1.882 1.882 0 0 1-1.055-.348l.006.004a2.84 2.84 0 0 1-.881-.986l-.007-.015a2.603 2.603 0 0 0-.768-.827l-.009-.006a2.331 2.331 0 0 0-.776-.38l-.016-.004l-.32-.048a1.048 1.048 0 0 0-.471.074l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002l.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024l.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002c.261 0 .517-.021.767-.062l-.027.004l.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001a.717.717 0 0 1-.645.111l.005.001C3.486 22.286.006 17.692.006 12.285c0-2.268.612-4.393 1.681-6.219l-.032.058a12.351 12.351 0 0 1 4.422-4.449l.058-.031a11.898 11.898 0 0 1 6.073-1.645h.098h-.005zm-7.64 17.666q.048-.112-.112-.192q-.16-.048-.208.032q-.048.112.112.192q.144.096.208-.032m.497.545q.112-.08-.032-.256q-.16-.144-.256-.048q-.112.08.032.256q.159.157.256.047zm.48.72q.144-.112 0-.304q-.128-.208-.272-.096q-.144.08 0 .288t.272.112m.672.673q.128-.128-.064-.304q-.192-.192-.32-.048q-.144.128.064.304q.192.192.32.044zm.913.4q.048-.176-.208-.256q-.24-.064-.304.112t.208.24q.24.097.304-.096m1.009.08q0-.208-.272-.176q-.256 0-.256.176q0 .208.272.176q.256.001.256-.175zm.929-.16q-.032-.176-.288-.144q-.256.048-.224.24t.288.128t.225-.224z" />
                    </svg></a></li>
                </ul>
            </div>
        </nav>
    )
}

Head.propTypes = { email: PropTypes.string }

export default Head;
