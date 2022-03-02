import { createContext, Dispatch, useContext, useReducer, ReactNode, useEffect } from "react";
import { Lang } from "../lang/Lang";
import English from "../lang/English";
import Swedish from "../lang/Swedish";

const LangContext = createContext<{ lang: Lang, setLang?: Dispatch<string> }>({ lang: English });

const LangReducer = (_: Lang, toUpdate: string) => {
  switch (toUpdate) {
    case 'swedish': {
      localStorage.setItem("lang", toUpdate);
      return Swedish;
    }
    default: {
      localStorage.setItem("lang", toUpdate);
      return English;
    }
  }
}

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useReducer(LangReducer, English);

  useEffect(() => {
    let lang = localStorage.getItem("lang") || "english";
    
    if (lang !== "english" && lang !== "swedish") {
      lang = "english";
    }

    setLang(lang);
  }, []);

  return (
    <LangContext.Provider value={{lang, setLang}}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext);
}