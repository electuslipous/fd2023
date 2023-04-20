import { component$, useSignal } from '@builder.io/qwik';

export const TicketCalculator = component$(() => {
    const ticketCount = useSignal(0)
    const ticketPrice = 500
    const total = ticketPrice * ticketCount.value

    return (
        <>
            <div class="flex flex-col items-center justify-center">
                <label class="text-2xl font-semibold mb-4" for="ticketnumber">How many tickets you want?</label>
                <input class="py-2 px-3 border rounded-md text-xl w-64 sm:w-80 mb-6" type="number" bind:value={ticketCount} />
            </div>
            <div class="flex flex-col items-center justify-center">
                <label for="priceSimulator" class="text-xl font-semibold">Price</label>
                <span class="mt-1 text-2xl font-medium">{total} forints</span>
            </div>
        </>
    )
});