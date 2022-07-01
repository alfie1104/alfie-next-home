import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body className="bg-custom-black-dark text-custom-white-dark leading-5 font-light font-sans">
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
