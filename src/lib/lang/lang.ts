import i18n from 'i18next';
import locales from './locales';

type Lang = 'en' | 'ja';

export default function initLang(la:Lang) {
    i18n.init({
        lng: la,
        resources: locales,
    },()=>{});
}


