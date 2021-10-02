import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: 'Bebas Neue';
            src: local(''),
              url('fonts/BebasNeue-Regular.ttf') format('truetype');
          }
          *,
          ::before,
          *::after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
