import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Preview from "./pages/Preview.jsx"
import Layout from "./pages/Layout.jsx"
import Dashboard from "./pages/Dashboard"
import ResumeBuilder from "./pages/ResumeBuilder.jsx"

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="app" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route
                        path="builder/:resumeId"
                        element={<ResumeBuilder />}
                    />
                </Route>

                <Route path="view/:resumeId" element={<Preview />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App
