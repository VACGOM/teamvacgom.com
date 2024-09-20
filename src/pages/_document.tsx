import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { extractCritical } from '@emotion/server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion-css={styles.ids.join(' ')} dangerouslySetInnerHTML={{ __html: styles.css }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

          {/* 추가된 메타 태그 부분 */}
          <title>Vacgom</title>
          <meta name="description" content="Generated by create next app" />
          <meta property="og:url" content="https://about.vacgom.co.kr/" />
          <meta property="og:title" content="Vacgom Official" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://private-user-images.githubusercontent.com/53892427/317091000-c89039ca-a866-452c-b372-79537abbc4d0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY4MjY1OTMsIm5iZiI6MTcyNjgyNjI5MywicGF0aCI6Ii81Mzg5MjQyNy8zMTcwOTEwMDAtYzg5MDM5Y2EtYTg2Ni00NTJjLWIzNzItNzk1MzdhYmJjNGQwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTIwVDA5NTgxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTExOTU2ZjFhODUxNmU1NGFjNGEwMjdlZTQ1OGM5MTYwYzUyNTkwMzYxYjEyMjI2MjVkODVlMmMyMDgwYjFhNDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.JMZ0_Qpyg0C6DCcon-nrIFP7TcLHYFJlOPs3MjKdrig"
          />
          <meta
            property="og:description"
            content="Team Vacgom의 공식 홈페이지입니다."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
