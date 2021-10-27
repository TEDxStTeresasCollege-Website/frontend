// pages/_app.js
import Layout from '../components/Layout'
import Lottie from 'react-lottie';
import animationData from '../public/loader/water-loading-animation.json'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleStart = () => { setLoading(true) }
    const handleComplete = () => { setLoading(false) }
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (loading) {
    return (
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
    )
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
