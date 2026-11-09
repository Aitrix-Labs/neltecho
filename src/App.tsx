import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import {
  AccountsPage,
  ArticlePage,
  BlogPage,
  CareersPage,
  CompanyPage,
  ContactPage,
  DemosPage,
  IndustriesPage,
  IndustryPage,
  LegalPage,
  PartnersPage,
  PricingPage,
  ProductPage,
  ProductsPage,
  ResourcesPage,
  ServicePage,
  ServicesPage,
  SitemapPage,
  SolutionPage,
  SolutionsPage,
} from './pages/SitePages'

export default function App() {
  return (
    <BrowserRouter basename="/neltecho">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="solutions/:slug" element={<SolutionPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="industries/:slug" element={<IndustryPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="partners/:slug" element={<PartnersPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/blog" element={<BlogPage />} />
          <Route path="resources/:slug" element={<ArticlePage />} />
          <Route path="demos" element={<DemosPage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="company/careers" element={<CareersPage />} />
          <Route path="company/:slug" element={<CompanyPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
