import React from 'react';
import { Header, Jumbotron, Footer } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Front end interface in React';

function Layout(props) {
  return (
    <html lang="en">
      <head>
        <title>Genesis Watson Discovery Service Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Discovery Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* Bluemix Analytics - begin*/}
        <script type="text/javascript">{`
          window._analytics = { coremetrics: false, optimizely: false, addRoll: false };
        `}</script>
        <meta name="segment" property="watson-demos" value="discovery-news-demo" />
        <script src={props.bluemixAnalytics} />
        {/* Bluemix Analytics  - end*/}
      </head>
      <body>
        <Header
          mainBreadcrumbs="Genesis Watson Demo"
          mainBreadcrumbsUrl="http://www.ibm.com/watson/developercloud/discovery.html"
          subBreadcrumbs="Genesis Watson Demo"
          subBreadcrumbsUrl="https://discovery-news-demo.mybluemix.net"
        />
        <div id="root">
          {props.children}
        </div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="js/ga.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired,
  bluemixAnalytics: React.PropTypes.string,
};

export default Layout;
