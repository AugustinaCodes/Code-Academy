import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const supportedLanguages = {
    en: "English",
    lt: "Lietuviu",
    de: "Vokieciu"
}

const resources = {
    en: {
        translation: {
            hi: "Hi",
            bye: "Goodbye",
            greetingsParagraph: "dsbnvjhksfbgjhsbfgvahjbfhjasbfvjhksdbfhjsdvb jsbfnkjsbvkjef nakfrbrjaekfbjkre jkfnrakjenf",
            pie: "Pie"
        }
    },
    lt: {
        translation: {
            hi: "Labas",
            bye: "Viso gero",
            greetingsParagraph: "janwfkjdeawbf jeawndkjwedn ejakbndkjaendb",
            pie: "Pyragas"
        }
    },
    de: {
        translation: {
            hi: "Hallo",
            bye: "Tschüss",
            greetingsParagraph: "jsklgmfnslrkeg klerangflkaenrf",
            pie: "Kuchen"
        }
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
})

export default i18n;

