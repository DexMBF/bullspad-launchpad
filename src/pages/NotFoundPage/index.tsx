import "./index.scss"
import { useNavigate } from "react-router-dom"

import { LEFT_LOOKING_BULL, NOT_FOUND_TRIANGLES } from "../../theme/sources"
import Button from "../../components/Button"
import useMobile from "../../hooks/useMobile"
import { Footer } from '../../components'

const NotFoundPage = () => {
  const navigate = useNavigate()
  const { mobile } = useMobile()

  return (
    <>
      <div className="nf-page-container">
        <div className="header">
          Sorry, page not found
        </div>
        <div className="description">
          We’re sorry, the page you requested could not be found.<br/>
          Please go back to the homepage.
        </div>
        <div className="error-title">
          404
        </div>
        <img
          src={NOT_FOUND_TRIANGLES}
          alt=""
          className="triangles"
        />
        <Button
          size="large"
          color="green"
          onClick={() => navigate("/")}
        >
          Homepage
        </Button>
        {!mobile && (
          <img
            src={LEFT_LOOKING_BULL}
            alt=""
            className="bull-image"
          />
        )}
      </div>
    </>
  )
}

export default NotFoundPage
