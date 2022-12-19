import React, { useEffect, useTransition } from "react";
import { useTranslation } from 'react-i18next';
import { RouterProvider } from "react-router-dom";
import { router } from "../router/router";
import initLang from "../lib/lang/lang";
import reportWebVitals from "../lib/reportWebVitals";
import i18next from 'i18next';

/*
export function Translate() {
    const { t } = useTranslation('maincontent');
    useEffect(() => {
        i18next.addResources('ja', 'maincontent', ja_Trans);
        i18next.addResources('en', 'maincontent', en_Trans);
        i18next.addResources('cn', 'maincontent', cn_Trans);
    }, [])
    return (
        <React.StrictMode>
             <p>{t('message')}</p>
        </React.StrictMode>
    );
}
*/


class App extends React.Component{
  render(): React.ReactNode {
    initLang('en');
    return(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
  }
}

export default App;

reportWebVitals(console.log)
