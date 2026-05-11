<template>
  <div class="my-2 flex items-start justify-between p-2">
    <div
      class="flex h-16 cursor-pointer items-center rounded-xl border border-[#2c2c38] bg-[#191923] px-4 py-3 text-white outline-none placeholder:text-[#8f8f9d]"
    >
      <label for="search" class="cursor-pointer"
        ><img :src="search" alt="" class="w-10"
      /></label>
      <input
        id="search"
        type="search"
        placeholder="Поиск видео..."
        class="w-xl cursor-pointer outline-0"
      />
    </div>
    <div class="flex items-center gap-4">
      <div>
        <img
          :src="notify"
          alt=""
          class="w-13 cursor-pointer transition-all duration-500 hover:scale-110 hover:-rotate-35"
        />
      </div>
      <div
        @click="store.isAuthClosed=true"
        class="w-15 cursor-pointer overflow-hidden rounded-full border border-[#2c2c38] transition-all duration-500 hover:scale-110"
      >
        <img  :src="profile_photo" alt="" class="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import search from "../assets/Icons/Header_Icons/search.png";
import notify from "../assets/Icons/Header_Icons/notify.png";
import profile_photo from "../assets/Pictures/Profile/profile_photo.png";

import { useStore } from '@/stores/counter';

const store = useStore()



</script>
