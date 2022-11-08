import "./index.scss"
import { DiscordIcon, TelegramIcon, TwitterIcon } from "../Icon"
import { SOCIAL_NETWORKS } from "../../theme/sources"

const Footer = () => {
  const getIcon = (icon: string) => {
    switch(icon) {
    case "twitter":
      return <TwitterIcon />
    case "telegram":
      return <TelegramIcon />
    case "discord":
      return <DiscordIcon />
    default:
      return
    }
  }

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
            {getIcon(icon.icon)}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer
