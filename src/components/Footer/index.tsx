import "./index.scss"
import { SOCIAL_NETWORKS } from "../../theme/sources"
import Icon from "../Icon"

const Footer = () => {
  return (
    <div className="footer">
      <div className="documents">
        <span>© 2022</span>
        <a
          href="/"
        >
          Privacy Policy
        </a>
        <a
          href="/"
        >
          Cookie Policy
        </a>
      </div>
      <div className="social-icons">
        {SOCIAL_NETWORKS.map(icon => (
          <a
            key={icon.icon}
            href={icon.href}
          >
            <Icon icon={icon.icon} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
