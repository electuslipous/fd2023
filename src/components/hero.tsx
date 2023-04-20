import { component$, useStore, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Hero = component$(() => {

    const currentImage = useStore({
        id:0
    })
    const images = ["/images/IMG_4215.jpg", "/images/fd1.jpg", "/images/fd3.jpg"]

    useVisibleTask$(( { cleanup })=>{
        const timer = setInterval(()=>{
            currentImage.id = (currentImage.id + 1) % images.length
            console.log("Runned")
        }, 3000)
        cleanup(()=> clearInterval(timer))
    })
    

    return (
        <section class="bg-gray-100 py-16 relative min-h-screen">
        <div class="absolute inset-0 z-0">
          <img src={images[currentImage.id]} alt="International Food Day" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="container relative z-10 flex flex-col sm:flex-row justify-between items-end px-6">
          <div class="flex-1 mb-1 sm:mb-0 sm:mr-8">
            <h2 class="text-4xl font-bold mb-4 text-white">Join us for a culinary adventure!</h2>
            <p class="text-xl mb-6 text-white">The International Food Day celebrates the diverse culture of the University of Debrecen with an array of delicious cuisines from all over the world.</p>
            <a href="/tickets" class="bg-yellow-500 text-white py-2 px-6 rounded-full text-lg hover:bg-yellow-600 transition-colors duration-300">Get your tickets now!</a>
          </div>
        </div>
      </section>
      
    )
});
