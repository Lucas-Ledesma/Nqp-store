import getCategories from '@/actions/get-categories'
import AboutUs from '@/components/aboutus'
import Category from '@/components/category'

export const revalidate = 0

const HomePage = async () => {
	const categories = await getCategories()

	return (
		<div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
			{categories.map((category) => (
				<Category data={category} key={category.id} />
			))}
			<AboutUs />
		</div>
	)
}

export default HomePage
