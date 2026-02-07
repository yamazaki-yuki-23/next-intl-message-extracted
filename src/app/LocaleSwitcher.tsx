'use client';

import {Locale, useLocale} from 'next-intl';

type Props = {
  changeLocaleAction: (locale: Locale) => Promise<void>;
};

const LocaleSwitcher = ({changeLocaleAction}: Props) => {
  const locale = useLocale();

  return (
    <div>
      {['en', 'de'].map((loc: Locale) => (
        <button
          key={loc}
          onClick={() => changeLocaleAction(loc)}
          style={{fontWeight: loc === locale ? 'bold' : 'normal'}}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
