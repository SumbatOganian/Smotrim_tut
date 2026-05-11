<template>
  <div class="m-4 w-80 rounded-2xl bg-[#12121a] p-2">
    <div class="flex items-center">
      <img :src="logo" alt="Лого" class="w-20" />
      <p class="cursor-default text-2xl font-bold text-white">Смотрим тут</p>
    </div>
    <nav class="mx-10 w-60 text-white">
      <ul class=" ">
        <router-link to="/">
          <li
            class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-150 hover:bg-gray-700"
          >
            <img :src="home" alt="" class="w-5" />Главная
          </li>
        </router-link>
        <router-link to="/trends">
          <li
            class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 duration-150 hover:bg-gray-700"
          >
            <img :src="trending" alt="" class="w-5" />Тренды
          </li>
        </router-link>
        <router-link to="/follows">
          <li
            class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 duration-150 hover:bg-gray-700"
          >
            <img :src="follows" alt="" class="w-5" />Подписки
          </li>
        </router-link>
        <li
          class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 duration-150 hover:bg-gray-700"
        >
          <img :src="shorts" alt="" class="w-5" />Shorts
        </li>
        <li
          class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 duration-150 hover:bg-gray-700"
        >
          <img :src="later" alt="" class="w-5" />Смотреть позже
        </li>
        <li
          class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 duration-150 hover:bg-gray-700"
        >
          <img :src="liked" alt="" class="w-5" />Понравившиеся
        </li>
      </ul>
      <div class="mx-5 my-5">
        <hr class="border-gray-500" />
      </div>
      <p class="mx-2 cursor-default font-semibold text-gray-500">Библиотека</p>

      <ul>
        <router-link to="/history">
            <li
          class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-150 hover:bg-gray-700"
        >
          <img :src="history" alt="" class="w-5" />История
        </li>
        </router-link>
        
        <li
          class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-150 hover:bg-gray-700"
        >
          <img :src="playlists" alt="" class="w-5" />Плейлисты
        </li>
        <li
          class="m-2 flex cursor-pointer gap-2 rounded-xl p-2 transition-all duration-150 hover:bg-gray-700"
        >
          <img :src="yours" alt="" class="w-5" />Ваши видео
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import logo from "../assets/Pictures/logo.png";
import home from "../assets/Icons/home.png";
import follows from "../assets/Icons/follows.png";
import history from "../assets/Icons/history.png";
import later from "../assets/Icons/later.png";
import liked from "../assets/Icons/liked.png";
import trending from "../assets/Icons/trending.png";
import yours from "../assets/Icons/yours.png";
import shorts from "../assets/Icons/shorts.png";
import playlists from "../assets/Icons/playlists.png";
</script>
