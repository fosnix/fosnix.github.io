export default function Head(props) {
    return (
        <nav>
            <div>
                <img src="../assets/profile.webp" alt="" />
                <h2>Uday @ {props.email}</h2>
            </div>

            <ul>
                <li>About</li>
                <li>Blogs</li>
                <li>Projects</li>
            </ul>
        </nav>
    )
}
