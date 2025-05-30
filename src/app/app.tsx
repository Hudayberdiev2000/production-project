import "./styles/index.scss"
import { useTheme } from "./providers/ThemeProvider"
import { classNames } from "shared/lib/classnames/classNames"
import AppRouter from "./providers/router"
import { Navbar } from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar";
import {Suspense} from "react";




export default function App() {
  const { theme } = useTheme()


  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback={""}>
          <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
      </Suspense>
    </div>
  )
}
