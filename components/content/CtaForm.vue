<template>
  <h2 class="fw-bold text-3xl font-display w-col-12 mt-2xl mb-xl text-center">
    <span class="text-primary">Leave</span> a message
  </h2>
  <form action="" class="row" @submit.prevent="() => ({})">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <input
        type="text"
        class="w-full p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-dark focus:outline-primary focus:ring-primary focus:border-primary ring-2 ring-transparent"
        placeholder="Name"
      />
      <input
        type="email"
        class="w-full p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-dark focus:outline-primary focus:ring-primary focus:border-primary ring-2 ring-transparent"
        placeholder="Email"
      />
    </div>
    <textarea
      id=""
      name=""
      cols="30"
      rows="10"
      class="w-full p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-dark mt-4 focus:outline-primary focus:ring-primary focus:border-primary ring-2 ring-transparent"
      placeholder="Message"
    ></textarea>

    <button
      type="submit"
      class="py-2 px-12 bg-primary shadow-sm rounded-full shadow-primary active:shadow-none mt-4 w-full md:w-xs mx-auto"
    >
      <span>Send</span>
      <span class="i-bx-send text-lg"></span>
    </button>
  </form>
</template>
