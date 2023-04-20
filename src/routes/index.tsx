import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ListOfCuisines } from '~/components/listOfCuisines';
import { Hero } from '~/components/hero';

export default component$(() => {
  return (
    <>
    <Hero />
    <ListOfCuisines />
    </>
  );
});

export const head: DocumentHead = {
  title: 'FD2023',
  meta: [
    {
      name: 'description',
      content: 'International Food Day - 2023',
    },
  ],
};
