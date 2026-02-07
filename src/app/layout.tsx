import {NextIntlClientProvider} from 'next-intl';
import {getExtracted, getLocale} from 'next-intl/server';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

type Props = {
  children: React.ReactNode;
};

export async function generateMetadata() {
  const t = await getExtracted();
  return {
    title: t({
      message: 'next-intl example',
      description: 'The title of the application'
    })
  };
}

export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
