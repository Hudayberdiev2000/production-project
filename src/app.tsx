import { Link, Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { AboutPageAsync } from "./pages/about-page/about-page.async"
import { MainPageAsync } from "./pages/main-page/main-page.async"
import { Suspense } from "react"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classnames/classNames"

export default function App() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Main page</Link>
      <Link to="/about">About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
