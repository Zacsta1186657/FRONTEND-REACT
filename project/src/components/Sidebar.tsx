import { useAuthStore } from "../auth/useAuthStore";
import { Link } from "react-router-dom";

export default function Sidebar() {

    const menu = useAuthStore(state => state.menu);

    return (
        <aside style={{ width: 200, background: "#eee", padding: 10 }}>
            <h3>Menu</h3>
            <ul>
                {menu.map((item, i) => (
                    <li key={i}>
                        <Link to={item.url}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    )
}