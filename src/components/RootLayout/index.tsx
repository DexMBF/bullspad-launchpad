import { Outlet } from "react-router-dom"

import { Footer } from "../index"

const RootLayout = () => {
  return (
    <>
      <div>
        Header
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
