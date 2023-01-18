import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import encompile from "../lib/lang/en-c.json"
import en from "../lib/lang/en.json"
import { IntlProvider ,defineMessages} from 'react-intl'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <IntlProvider messages={encompile} locale="en" defaultLocale="en">
      <Component {...pageProps} />
    </IntlProvider> 
  )
}
