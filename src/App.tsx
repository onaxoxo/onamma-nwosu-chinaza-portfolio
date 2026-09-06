import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyPage from './components/casestudy/CaseStudyPage'
import sora from './data/case-studies/sora'
import ocicat from './data/case-studies/ocicat'
import cver from './data/case-studies/cver'
import vendify from './data/case-studies/vendify'
import budgetBuddy from './data/case-studies/budget-buddy'

const caseStudies = [sora, ocicat, cver, vendify, budgetBuddy]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {caseStudies.map((study) => (
          <Route
            key={study.slug}
            path={`/case-study/${study.slug}`}
            element={<CaseStudyPage study={study} />}
          />
        ))}
      </Routes>
    </>
  )
}
