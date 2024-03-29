import { Text } from '@/components/ui/text'
import about from '@/public/about/about.jpg'
import about2 from '@/public/about/nosotros.jpg'
import about3 from '@/public/about/nosotrosss.jpg'
import Image from 'next/image'
import Socials from '@/components/socials'
import { List } from '@/components/list'
import ImageAnimate from '@/components/image-animate'
import MobileSliderAbout from '@/components/mobile-slider-about'

const About = () => {
	return (
		<div className='flex flex-col gap-16 max-w-7xl mx-auto'>
			<div className='grid xl:flex xl:flex-col gap-10 justify-center items-center '>
				<div className='flex flex-col gap-10 text-center items-center justify-center'>
					<h1 className='text-4xl pb-5 '>Conocenos!</h1>
					<Text />
					<Socials />
				</div>
				<div className='hidden xl:flex flex-col lg:flex-row w-full h-full lg:h-[600px] relative'>
					<Image
						src={about2}
						alt='about1'
						width={300}
						height={400}
						className='object-cover border-[2px] mx-auto'
					/>
					<Image
						src={about}
						alt='about2'
						width={300}
						height={400}
						className=' object-cover border-[2px] mx-auto'
					/>
					<Image
						src={about3}
						alt='about3'
						width={300}
						height={400}
						className=' object-cover border-[2px] mx-auto'
					/>
				</div>
				<div className='xl:hidden mt-10'>
					<MobileSliderAbout
						images={[about, about2, about3]}
						title=''
					/>
				</div>
				<div className=' md:w-full mx-auto'>
					<ImageAnimate />
				</div>
			</div>
			<div>
				<h1 className='text-4xl pb-5'>Entrevistas</h1>
				<List />
			</div>
			<div className='informativeText'>
				<ul>
					<li>
						2015 - Ganadores del concurso “Misiones Diseña”
						de la Subsecretaría de Cultura de la Provincia
						de Misiones.
					</li>
					<li>
						2018 - Premio “Diseño Sustentable” de la Feria
						de Artesanías del Mercosur (FAM)
					</li>
					<li>
						2019 - Ganadores Beca “Creación” del Fondo
						Nacional de las Artes para Proyecto PAR&Co
					</li>
					<li>
						2019 - Ganadores “Concurso Nacional Potenciar”
						del Ministerio de Desarrollo Social de la
						Nación.
					</li>
					<li>
						2019 - Nominación “Premios Arandú” a la
						trayectoria, categoría artes visuales del
						Honorable
					</li>
					<li>
						Concejo Deliberante de la Ciudad de Posadas.
					</li>
					<li>
						Muestra artística individual en el Museo Yaparí
						(2019) Museo Gastòn Dachary (2020)
					</li>
					<li>
						espacio Multicultural de la Costanera de Posadas
						(2022)
					</li>
					<li>
						2021/2022 - Beneficiarios “MANTA” programa de la
						Secretaría de Desarrollo Cultural y el Mercado
						de Artesanías Tradicionales e Innovadoras
						Argentinas.
					</li>
					<li>
						Representantes de Misiones en la Feria
						&quot;Puro Diseño&quot; de la Rural de Bs As.
					</li>
				</ul>
			</div>
		</div>
	)
}

export default About
