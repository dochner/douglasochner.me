<template>
  <div class="row relative min-h-screen w-full overflow-hidden pb-84px">
    <Header />
    <main class="pt-$header-height">
      <slot />
    </main>
    <Footer class="absolute bottom-0 w-full" />
  </div>
</template>
