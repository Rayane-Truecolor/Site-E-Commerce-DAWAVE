import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import App from './App.tsx'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StoreProvider } from './Store.tsx'
import CartPage from './pages/CartPage.tsx'
import SigninPage from './pages/SigninPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import ShippingAddressPage from './pages/ShippingAddressPage.tsx'
import PaymentMethodPage from './pages/PaymentMethodPage.tsx'
import './components/Traduction/i18n.js';
import Planche from './pages/NavbarPage/Planche.tsx'
import Leash from './pages/NavbarPage/Leash.tsx'
import Wax from './pages/NavbarPage/Wax.tsx'
import Accessoire from './pages/NavbarPage/Accessoire.tsx'
import FAQ from './pages/FooterPage/FAQ.tsx'
import Contact from './pages/FooterPage/Contact.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/*index=true" permet de booté l'application sur l'élément HomePage*/}
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path='cart' element={<CartPage />} />
      <Route path='signin' element={<SigninPage />} />
      <Route path='signup' element={<SignupPage />} />
      <Route path='shipping' element={<ShippingAddressPage />} />
      <Route path='payment' element={<PaymentMethodPage />} />
      <Route path='planche' element={<Planche />} />
      <Route path='leash' element={<Leash />} />
      <Route path='wax' element={<Wax />} />
      <Route path='accessoire' element={<Accessoire />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='contact' element={<Contact />} />




      


      




      {/*<Route path="dashboard" element={<Dashboard />} />*/}
      {/* ... etc. */}
    </Route>
  )
)

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
)
