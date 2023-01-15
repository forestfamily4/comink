import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div> 
        <h1>ComInk</h1>
        <p>{t("title.hello")}</p>
    </div>
  )
}
