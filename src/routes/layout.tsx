import { component$, Slot } from '@builder.io/qwik';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';

export default component$(() => {
  return (
    <div class="page">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
