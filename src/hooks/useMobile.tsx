import { useEffect, useState } from "react"

const getMobile = () => window.innerWidth < 1200

export default function useMobile() {
  const [mobile, setMobile] = useState(getMobile())

  useEffect(() => {
    const onResize = () => {
      setMobile(getMobile())
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return {
    mobile
  }
}
