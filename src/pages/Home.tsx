import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <body>
        <h1>ComInk</h1>
        <p>{t("home.hello")}</p>
    </body>
  )
}
