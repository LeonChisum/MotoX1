import Head from 'next/head';

export default function Home() {
	return (
		<div>
			<Head>
				<meta
					name='description'
					content='A new electric motorcyle and dirtbike brand that will iginite the industry!'
				/>
				<title>Moto - Iginite The Industry</title>
			</Head>
			<header>
				<div className='header-container'>
					<div className='logo'>
						<a href='/'>
							<img src='/img/MotoLogo.png' alt='Moto Logo' />
						</a>
					</div>
					<div className='header-menu'>
						<a href='/#hero-section'>Moto X</a>
						<a href='/#motoZoom-section'>Moto Zoom</a>
						<a href='/#motoMini-section'>Moto Mini</a>
						<a href='/#cta-section'>Pre-Order</a>
					</div>
					<div className='menu-btn'>
						<i className='fas fa-bars'></i>
					</div>
				</div>
			</header>
			<section id='hero-section'>
				<div className='main-container hero-container'>
					<div className='img-wrapper'>
						<img
							src='https://i.pinimg.com/originals/c7/fe/19/c7fe19a60682cf99bfda34f9e62a63e5.png'
							alt='electric dirt bike'
						/>
					</div>
					<div className='heading-wrapper'>
						<h2 className='product-heading'>Get a Feel For the New Ride</h2>
						<a href='/#cta-section'>Pre-order &rarr;</a>
					</div>
					<p className='desc'>
						Become electrified with this new thrill. Feel what it's like to ride into the future with the
						amazing Moto design.
					</p>
				</div>
			</section>
			<section id='motoX-section'>
				<div className='main-container'>
					<div className='heading-wrapper'>
						<h2 className='product-heading'>Generate Power, Cleanly</h2>
						<i className='fas fa-leaf'></i>
					</div>
					<p className='desc'>
						Become electrified with this new thrill. Feel what it's like to ride into the future with the
						amazing Moto design.
					</p>
					<div className='img-wrapper'>
						<img src='./img/EvCharger.png' alt='electric dirt bike' />
					</div>
					<div className='info-wrapper'>
						<div className='icons'>
							<i className='fas fa-battery-empty'></i>
							<p>72v/40Ah Li-ion</p>
						</div>
						<div className='icons'>
							<i className='fas fa-bolt'></i>
							<p>Fast Charging</p>
						</div>
						<div className='icons'>
							<i className='fas fa-road'></i>
							<p>200 mile range</p>
						</div>
					</div>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319'>
						<path
							fill='#ffffff'
							fill-opacity='1'
							d='M0,160L80,133.3C160,107,320,53,480,74.7C640,96,800,192,960,218.7C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
					</svg>
				</div>
			</section>
			<section id='motoZoom-section'>
				<div className='main-container'>
					<div className='heading-wrapper zoom-wrapper'>
						<h2 className='product-heading'>
							<span>All new</span> MotoZoom
						</h2>
						<a href='/#cta-section'>
							Pre-order <span className='arrow'>&rarr;</span>
						</a>
					</div>
					<div className='img-wrapper'>
						<img src='./img/MotoX.png' alt='Moto X bike' />
					</div>
					<div className='desc-container'>
						<p className='desc'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt.
						</p>
						<p className='desc'>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
							laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
							architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
							voluptatem sequi nesciunt.
						</p>
					</div>
				</div>
			</section>
			<section id='motoZoom-section' id='motoMini-section'>
				<div className='main-container'>
					<div className='heading-wrapper'>
						<h2 className='product-heading'>
							<span>Got Kids?</span> MotoMini
						</h2>
						<a href='/#cta-section'>
							Pre-order <span className='arrow'>&rarr;</span>
						</a>
					</div>
					<div className='img-wrapper'>
						<img src='./img/MotoMini.png' alt='Moto Mini bike' />
					</div>
					<p className='desc'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
						laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
						odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
					</p>
				</div>
			</section>
			<section id='cta-section'>
				<div className='main-container'>
					<div className='cta-info'>
						<h2>Ready to Ride?</h2>
						<form name='motox' autocomplete='on' method='POST' data-netlify='true'>
							<input type='hidden' name='form-name' value='motox' />
							<input type='email' id='email' name='email' placeholder='Email' required />
							<br />
							<input type='submit' value='Join Pre-Order List' />
						</form>
					</div>
				</div>
			</section>
			<footer id='contact'>
				<div className='main-container'>
					<div className='footer-wrapper'>
						<h5>Moto | A New Way To Ride</h5>
						<a href='http://www.facebook.com/'>Contact</a>
						<a href='http://www.twitter.com/'>Stay Updated</a>
						<a href='http://www.twitter.com/'>Pre-Order</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
