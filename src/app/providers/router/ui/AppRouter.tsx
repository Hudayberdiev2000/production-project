import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import {PageLoader} from "shared/ui/PageLoader/PageLoader";

export default function AppRouter() {
  return (
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
  )
}
