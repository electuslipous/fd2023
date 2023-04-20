import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
    return (
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">About Us</h3>
                    <p class="text-lg mb-4">The International Student Union is a student-run organization dedicated to promoting cultural diversity and awareness at the University of Debrecen.</p>
                    <a href="#" class="text-lg hover:text-gray-400 transition-colors duration-300">Learn More</a>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Event Details</h3>
                    <p class="text-lg mb-4">Date: May 19, 2023</p>
                    <p class="text-lg mb-4">Time: 14:00h - 02:00 (20th of May)</p>
                    <p class="text-lg mb-4">Location: University of Debrecen, Egyetem tér 1, 4032 Debrecen, Hungary</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Contact Us</h3>
                    <p class="text-lg mb-4">Email: isudebrecen@gmail.com</p>
                    <p class="text-lg mb-4">Follow Us: <a href="#" class="text-lg hover:text-gray-400 transition-colors duration-300">Facebook</a>, <a href="#" class="text-lg hover:text-gray-400 transition-colors duration-300">Instagram</a>, <a href="#" class="text-lg hover:text-gray-400 transition-colors duration-300">Twitter</a></p>
                </div>
            </div>
        </footer>


    )
});