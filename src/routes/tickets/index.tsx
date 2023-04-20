import { component$ } from '@builder.io/qwik';
import { TicketCalculator } from '~/components/ticketCalculator';

export default component$(() => {
  return (
      <>
      <TicketCalculator />
      <div class="flex justify-center mb-10">
      <table class="table-auto mt-8 text-center">
        <thead>
          <tr>
            <th class="border bg-gray-900 text-white px-4 py-2">Location</th>
            <th class="border bg-gray-900 text-white px-4 py-2">Timing</th>
            <th class="border bg-gray-900 text-white px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hover:bg-slate-300">
            <td class="border px-4 py-2">Life Sciences Building</td>
            <td class="border px-4 py-2">10am-4pm</td>
            <td class="border px-4 py-2 text-center">Take me there!</td>
          </tr>
          <tr class="hover:bg-slate-300">
            <td class="border px-4 py-2">Kassai Campus</td>
            <td class="border px-4 py-2">9am-8pm</td>
            <td class="border px-4 py-2">456 Elm St, Debrecen</td>
          </tr>
          <tr class="hover:bg-slate-300">
            <td class="border px-4 py-2">Agrar Campus</td>
            <td class="border px-4 py-2">12pm-4pm</td>
            <td class="border px-4 py-2">789 Oak St, Debrecen</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>


  )
});