import { quickLinks } from "../../constants";
import "./index.scss"

const QuickLinks = () =>{
    return(
        <div className="quick-link">
            <h2>Quick links</h2>
            {quickLinks.map((item)=>(
                <div key={item.id}>
                    <a href={item.href}>{item.title}</a>
                </div>
            ))}
        </div>
    )
}

export default QuickLinks