import { createContext, Dispatch, useContext, useReducer, ReactNode } from "react";
import { Lang } from "../lang/Lang";
import English from "../lang/English";
import Swedish from "../lang/Swedish";

const LangContext = createContext<{ lang: Lang, setLang?: Dispatch<string> }>({ lang: English });

const LangReducer = (_: Lang, toUpdate: string) => {
  switch (toUpdate) {
    case 'swedish': return Swedish;
    default: return English;
  }
}

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useReducer(LangReducer, English);
  return (
    <LangContext.Provider value={{lang, setLang}}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext);
}