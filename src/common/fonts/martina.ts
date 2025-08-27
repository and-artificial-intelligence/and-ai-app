import localFont from 'next/font/local';

export const martina = localFont({
  src: [
    {
      path: '../../../public/fonts/TestMartinaPlantijn-Light.otf',
      weight: '300',
    },
    {
      path: '../../../public/fonts/TestMartinaPlantijn-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-martina',
  display: 'swap',
});
