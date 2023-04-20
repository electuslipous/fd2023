import { component$ } from '@builder.io/qwik';

export const ListOfCuisines = component$(() => {
  return (
<section class="bg-white py-4 mb-6">
	<div class="container mx-auto px-6">
		<h2 class="text-3xl font-bold mb-8 text-center">Cuisines and Regions Featured</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			<div class="bg-gray-200 rounded-lg shadow-lg p-6">
				<h3 class="text-xl font-bold mb-4">Japanese Cuisine</h3>
				<p class="text-lg">Sushi, Ramen, Tempura, Yakitori and more...</p>
			</div>
			<div class="bg-gray-200 rounded-lg shadow-lg p-6">
				<h3 class="text-xl font-bold mb-4">Indian Cuisine</h3>
				<p class="text-lg">Curry, Naan, Tandoori Chicken, Biryani and more...</p>
			</div>
			<div class="bg-gray-200 rounded-lg shadow-lg p-6">
				<h3 class="text-xl font-bold mb-4">Mexican Cuisine</h3>
				<p class="text-lg">Tacos, Quesadillas, Enchiladas, Guacamole and more...</p>
			</div>
		</div>
	</div>
</section>

  )
});