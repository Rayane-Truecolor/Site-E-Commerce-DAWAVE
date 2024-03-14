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
import './components/Traduction/i18n.js'
import Planche from './pages/NavbarPage/Planche.tsx'
import FAQ from './pages/FooterPage/FAQ.tsx'
import Contact from './pages/FooterPage/Contact.tsx'
import CGU from './pages/FooterPage/CGU.tsx'
import Qui from './pages/FooterPage/Qui.tsx'
import Mention from './pages/FooterPage/Mention.tsx'
import Hybride from './pages/PlancheSurf/Hybride.tsx'
import Shortboard from './pages/PlancheSurf/Shortboard.tsx'
import Longboard from './pages/PlancheSurf/Longboard.tsx'
import Combinaison from './pages/Accessoire/Combinaison.tsx'
import Leash from './pages/Accessoire/Leash.tsx'
import Wax from './pages/Accessoire/Wax.tsx'
import Camera from './pages/Accessoire/Camera.tsx'
import Accessoire from './pages/NavbarPage/Accessoire.tsx'
import Aileron from './pages/NavbarPage/Aileron.tsx'
import Pads from './pages/NavbarPage/Pads.tsx'
import CombinaisonEte from './pages/Accessoire/CombinaisonEte.tsx'
import CollectionDawave from './pages/CollectionDawave.tsx'
import FCS from './pages/marque/FCS.tsx'
import Firewire from './pages/marque/Firewire.tsx'
import Hurley from './pages/marque/Hurley.tsx'
import Oneill from './pages/marque/Oneill.tsx'
import Quicksilver from './pages/marque/Quicksilver.tsx'
import RipCurler from './pages/marque/RipCurler.tsx'
import AdminDeletePage from './pages/AdminDeletePage.tsx'
import AdminUpdatePage from './pages/AdminUpdatePage.tsx'
import AdminAddPage from './pages/AdminAddPage.tsx'
import UserModifier from './pages/UserModifier.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/*index=true" permet de booté l'application sur l'élément HomePage*/}
      <Route index={true} element={<HomePage />} />
      <Route path="product/:slug" element={<ProductPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="shipping" element={<ShippingAddressPage />} />
      <Route path="payment" element={<PaymentMethodPage />} />
      <Route path="planche" element={<Planche />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cgu" element={<CGU />} />
      <Route path="qui" element={<Qui />} />
      <Route path="mention" element={<Mention />} />
      <Route path="hybride" element={<Hybride />} />
      <Route path="shortboard" element={<Shortboard />} />
      <Route path="longboard" element={<Longboard />} />
      <Route path="combinaison" element={<Combinaison />} />
      <Route path="leash" element={<Leash />} />
      <Route path="wax" element={<Wax />} />
      <Route path="camera" element={<Camera />} />
      <Route path="accessoire" element={<Accessoire />} />
      <Route path="aileron" element={<Aileron />} />
      <Route path="pads" element={<Pads />} />
      <Route path="combinaison-ete" element={<CombinaisonEte />} />
      <Route path="collection-dawave" element={<CollectionDawave />} />
      <Route path="adminaddpage" element={<AdminAddPage />} />
      <Route path="admindeletepage" element={<AdminDeletePage />} />
      <Route path="adminapdatepage" element={<AdminUpdatePage />} />
      <Route path="usermodifier" element={<UserModifier />} />





      <Route path="fcs" element={<FCS />} />

      <Route path="firewire" element={<Firewire />} />

      <Route path="hurley" element={<Hurley />} />

      <Route path="oneill" element={<Oneill />} />

      <Route path="quicksilver" element={<Quicksilver />} />

      <Route path="ripcurl" element={<RipCurler />} />


      

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
