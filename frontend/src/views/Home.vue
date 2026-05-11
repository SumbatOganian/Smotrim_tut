<template>
  <main class="w-full p-2 pb-10">
    <!-- Hero block -->
    <section
      class="relative mb-8 overflow-hidden rounded-4xl border border-[#2c2c38] bg-[#14141d] p-8"
    >
      <div class="absolute right-0 top-0 h-60 w-60 rounded-full bg-[#7c3aed]/20 blur-3xl"></div>
      <div class="absolute bottom-0 left-40 h-40 w-40 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>

      <div class="relative z-10 max-w-2xl">
        <p class="mb-3 text-sm font-semibold text-[#a78bfa]">
          Новая видеоплатформа
        </p>

        <h1 class="text-4xl font-bold leading-tight text-white md:text-5xl">
          Смотри лучшее видео на
          <span class="text-[#8b5cf6]">СмотримТут</span>
        </h1>

        <p class="mt-4 max-w-xl text-base leading-7 text-[#aaaab7]">
          Видео, авторы, каналы, рекомендации и плейлисты в одном современном пространстве.
        </p>

        <div class="mt-7 flex flex-wrap gap-3">
          <button
            class="rounded-2xl bg-[#7c3aed] px-6 py-3 font-semibold text-white transition hover:bg-[#8b5cf6]"
          >
            Смотреть сейчас
          </button>

          <button
            class="rounded-2xl border border-[#2c2c38] bg-[#191923] px-6 py-3 font-semibold text-white transition hover:border-[#7c3aed]"
          >
            Загрузить видео
          </button>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="mb-8">
      <div class="flex gap-3 overflow-x-auto pb-2">
        <button
          v-for="category in categories"
          :key="category"
          class="shrink-0 rounded-2xl border border-[#2c2c38] bg-[#191923] px-5 py-3 text-sm font-medium text-[#d6d6df] transition hover:border-[#7c3aed] hover:text-white"
          :class="category === activeCategory ? 'border-[#7c3aed] bg-[#7c3aed] text-white' : ''"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </section>

    <!-- Section title -->
    <section class="mb-5 flex items-center justify-between">
      <div>
        <h2 class="text-2xl font-bold text-white">Рекомендации</h2>
        <p class="mt-1 text-sm text-[#aaaab7]">
          Подборка видео специально для тебя
        </p>
      </div>

      <button class="text-sm font-semibold text-[#a78bfa] transition hover:text-white">
        Смотреть все
      </button>
    </section>

    <!-- Videos grid -->
    <section class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <article
        v-for="video in videos"
        :key="video.id"
        class="group cursor-pointer"
      >
        <!-- Thumbnail -->
        <div
          class="relative aspect-video overflow-hidden rounded-3xl border border-[#2c2c38] bg-[#191923]"
        >
          <div
            class="flex h-full w-full items-center justify-center bg-gradient-to-br"
            :class="video.gradient"
          >
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-black/30 backdrop-blur-md transition group-hover:scale-110">
              <div class="ml-1 h-0 w-0 border-y-[12px] border-l-[20px] border-y-transparent border-l-white"></div>
            </div>
          </div>

          <span
            class="absolute bottom-3 right-3 rounded-lg bg-black/80 px-2 py-1 text-xs font-semibold text-white"
          >
            {{ video.duration }}
          </span>
        </div>

        <!-- Info -->
        <div class="mt-4 flex gap-3">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#252536] font-bold text-white"
          >
            {{ video.channel[0] }}
          </div>

          <div class="min-w-0">
            <h3
              class="line-clamp-2 text-base font-semibold leading-6 text-white transition group-hover:text-[#a78bfa]"
            >
              {{ video.title }}
            </h3>

            <p class="mt-1 text-sm text-[#aaaab7]">
              {{ video.channel }}
            </p>

            <p class="mt-1 text-sm text-[#777786]">
              {{ video.views }} просмотров • {{ video.date }}
            </p>
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const activeCategory = ref('Все')

const categories = [
  'Все',
  'Музыка',
  'Игры',
  'Технологии',
  'Новости',
  'Кино',
  'Спорт',
  'Образование',
  'Подкасты',
  'Shorts'
]

const videos = [
  {
    id: 1,
    title: 'Путешествие по Алтаю: дикая природа России',
    channel: 'Пределы возможного',
    views: '125 тыс.',
    date: '2 дня назад',
    duration: '31:12',
    gradient: 'from-[#312e81] via-[#4c1d95] to-[#111827]'
  },
  {
    id: 2,
    title: 'Будущее уже здесь: города следующего поколения',
    channel: 'ТехноМир',
    views: '98 тыс.',
    date: '1 день назад',
    duration: '18:35',
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#312e81]'
  },
  {
    id: 3,
    title: 'Как создаются вирусные видео: разбор алгоритмов',
    channel: 'МедиаКласс',
    views: '540 тыс.',
    date: '4 дня назад',
    duration: '22:10',
    gradient: 'from-[#1e1b4b] via-[#581c87] to-[#0f172a]'
  },
  {
    id: 4,
    title: 'Большое интервью: честный разговор без масок',
    channel: 'Открытый эфир',
    views: '1,2 млн.',
    date: '5 дней назад',
    duration: '1:02:15',
    gradient: 'from-[#111827] via-[#374151] to-[#1e1b4b]'
  },
  {
    id: 5,
    title: 'Топ-10 игр, которые стоит пройти в этом году',
    channel: 'ИгроПульс',
    views: '312 тыс.',
    date: '6 часов назад',
    duration: '14:48',
    gradient: 'from-[#18181b] via-[#3f3f46] to-[#4c1d95]'
  },
  {
    id: 6,
    title: 'Почему искусственный интеллект меняет интернет',
    channel: 'AI Лаборатория',
    views: '870 тыс.',
    date: '3 дня назад',
    duration: '26:04',
    gradient: 'from-[#020617] via-[#1e293b] to-[#3730a3]'
  },
  {
    id: 7,
    title: 'Музыкальный лайв: вечерний сет в студии',
    channel: 'ЗвукLive',
    views: '74 тыс.',
    date: '8 часов назад',
    duration: '42:30',
    gradient: 'from-[#2e1065] via-[#4c1d95] to-[#111827]'
  },
  {
    id: 8,
    title: 'Документальный фильм о людях, которые меняют города',
    channel: 'Городские истории',
    views: '201 тыс.',
    date: '1 неделю назад',
    duration: '55:18',
    gradient: 'from-[#111827] via-[#1f2937] to-[#312e81]'
  }
]
</script>