
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./components/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import PracticePage from "./pages/PracticePage";
import AssessmentsPage from "./pages/AssessmentsPage";
import ResourcesPage from "./pages/ResourcesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";


import RBStepPage from "./pages/rb/RBStepPage";
import ResumeHome from "./pages/resume/ResumeHome";
import ResumeBuilder from "./pages/resume/ResumeBuilder";
import ResumePreview from "./pages/resume/ResumePreview";

import Navigation from "./components/Navigation";
import Readiness from "./modules/readiness/App";
import JobsApp from "./modules/jobs/JobsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<ResumeHome />} />
          <Route path="/builder" element={<ResumeBuilder />} />
          <Route path="/preview" element={<ResumePreview />} />


          {/* Legacy Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="practice" element={<PracticePage />} />
            <Route path="assessments" element={<AssessmentsPage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>

          {/* Readiness Module Routes */}
          <Route path="/readiness/*" element={<Readiness />} />

          {/* Job Hunter Module Routes */}
          <Route path="/jobs/*" element={<JobsApp />} />



          {/* AI Resume Builder Routes */}
          <Route path="/rb/01-problem" element={<RBStepPage />} />
          <Route path="/rb/02-market" element={<RBStepPage />} />
          <Route path="/rb/03-architecture" element={<RBStepPage />} />
          <Route path="/rb/04-hld" element={<RBStepPage />} />
          <Route path="/rb/05-lld" element={<RBStepPage />} />
          <Route path="/rb/06-build" element={<RBStepPage />} />
          <Route path="/rb/07-test" element={<RBStepPage />} />
          <Route path="/rb/08-ship" element={<RBStepPage />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
