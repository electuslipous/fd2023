import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {
    
    const isNavOpen = useSignal(false)

    return (
        <header class="bg-gray-900 text-white py-4">
            <div class="container mx-auto flex justify-between items-center px-6">
                <h1 class="text-3xl font-bold">International Food Day</h1>
                <nav class="hidden md:block">
                    <ul class="flex">
                        <li class="ml-6">
                            <span class="text-lg font-medium">
                                <a href="/">Home</a>
                            </span>
                        </li>
                        <li class="ml-6">
                            <span class="text-lg font-medium">
                                <a href="/about">About</a>
                            </span>
                        </li>
                        <li class="ml-6">
                            <span class="bg-transparent border hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                                <a href="/tickets">GET TICKETS</a>
                            </span>
                        </li>
                    </ul>
                </nav>
                <button onClick$={() => { isNavOpen.value = !isNavOpen.value }} class="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-grey-500">
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" /></svg>
                </button>
            </div>
            {isNavOpen.value ?

                <div class="md:hidden bg-grey-900 text-white" id="mobile-menu">
                    <ul class="flex flex-col items-center">
                        <li class="my-2">
                            <span class="text-lg font-medium">
                                <Link href="/">Home</Link>
                            </span>
                        </li>
                        <li class="my-2">
                            <span class="text-lg font-medium">
                                <Link href="/about">About</Link>
                            </span>
                        </li>
                        <li class="my-2">
                            <span class="bg-transparent border hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
                                <Link href="/tickets">GET TICKETS</Link>
                            </span>
                        </li>
                    </ul>
                </div>
                 : "" }
            </header>

    )
});