export default function DefaultLayout({Component, pageProps}: any) {
    return (
      <div className="root">
        <div className="body">
          <div className="body-wrapper">
            <Component {...pageProps}/>
          </div>
        </div>
      </div>
    )
}