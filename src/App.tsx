import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyPage from './components/casestudy/CaseStudyPage'
import MobileHome from './mobile/MobileHome'
import MobileCaseStudy from './mobile/MobileCaseStudy'
import { useIsMobile } from './hooks/useIsMobile'
import sora from './data/case-studies/sora'
import ocicat from './data/case-studies/ocicat'
import cver from './data/case-studies/cver'
import vendify from './data/case-studies/vendify'
import budgetBuddy from './data/case-studies/budget-buddy'
import relocateConnect from './data/case-studies/relocate-connect'
import Work from './pages/Work'
import MobileWork from './mobile/MobileWork'

const caseStudies = [sora, ocicat, cver, vendify, budgetBuddy, relocateConnect]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const isMobile = useIsMobile()

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
        <Route path="/work" element={isMobile ? <MobileWork /> : <Work />} />
        {caseStudies.map((study) => (
          <Route
            key={study.slug}
            path={`/case-study/${study.slug}`}
            element={
              isMobile ? <MobileCaseStudy study={study} /> : <CaseStudyPage study={study} />
            }
          />
        ))}
      </Routes>
    </>
  )
}
