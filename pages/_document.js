import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta charset='UTF-8' />
					<meta name='viewport' content='width=device-width, user-scalable=no' />
					<script src='https://kit.fontawesome.com/83e4e82e26.js' crossorigin='anonymous'></script>
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Andika&display=swap'
						rel='stylesheet'
					/>

					<link rel='apple-touch-icon' sizes='180x180' href='/favicon_package/apple-touch-icon.ico' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon_package/favicon-32x32.ico' />
					<link rel='icon' type='image/png' sizes='16x16' href='/favicon_package/favicon-16x16.ico' />
					<link rel='manifest' href='/favicon_package/site.webmanifest' />
					<link rel='mask-icon' href='/favicon_package/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#da532c' />
					<meta name='theme-color' content='#ffffff' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
