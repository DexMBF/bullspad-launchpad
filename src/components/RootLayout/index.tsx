import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <div>
        Header
      </div>
      <Outlet />
    </>
  )
}

export default RootLayout
