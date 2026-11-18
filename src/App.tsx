import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { ExperienceTimeline } from './components/sections/ExperienceTimeline'
import { Certifications } from './components/sections/Certifications'
import { ResumeSection } from './components/sections/ResumeSection'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { BackToTop } from './components/common/BackToTop'
import { MotionCanvas } from './components/common/MotionCanvas'

export function App() {
  return (
    <div className="relative min-h-screen bg-[#101113] text-[#F5F5F5] font-body selection:bg-[#E53945] selection:text-white overflow-hidden">
      {/* Background Interactive Ambient Motion Canvas */}
      <MotionCanvas />

      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: About */}
        <About />

        {/* Section 03: Skills */}
        <Skills />

        {/* Section 04: Projects */}
        <Projects />

        {/* Section 05: Education & Experience Timeline */}
        <ExperienceTimeline />

        {/* Section 06: Certifications */}
        <Certifications />

        {/* Section 07: Resume */}
        <ResumeSection />

        {/* Section 08: Contact */}
        <Contact />
      </main>

      {/* Section 09: Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  )
}

export default App
