<template>
  <main class="w-full p2 pb-10">
    <!-- Header block -->
    <section
      class="relative mb-8 overflow-hidden rounded-4xl border border-[#2c2c38] bg-[#14141d] p-8"
    >
      <div class="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#7c3aed]/20 blur-3xl"></div>
      <div class="absolute bottom-0 left-32 h-40 w-40 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>

      <div class="relative z-10">
        <p class="mb-3 text-sm font-semibold text-[#a78bfa]">
          Самое популярное сейчас
        </p>

        <h1 class="text-4xl font-bold text-white md:text-5xl">
          Тренды
        </h1>

        <p class="mt-4 max-w-xl text-base leading-7 text-[#aaaab7]">
          Видео, которые сейчас набирают просмотры, обсуждения и лайки на СмотримТут.
        </p>
      </div>
    </section>

    <!-- Time filters -->
    <section class="mb-8 flex flex-wrap gap-3">
      <button
        v-for="filter in filters"
        :key="filter"
        @click="activeFilter = filter"
        class="rounded-2xl border border-[#2c2c38] bg-[#191923] px-5 py-3 text-sm font-medium text-[#d6d6df] transition hover:border-[#7c3aed] hover:text-white"
        :class="activeFilter === filter ? 'border-[#7c3aed] bg-[#7c3aed] text-white' : ''"
      >
        {{ filter }}
      </button>
    </section>

    <!-- Top trend -->
    <section class="mb-10">
      <h2 class="mb-5 text-2xl font-bold text-white">
        Главный тренд
      </h2>

      <article
        class="grid overflow-hidden rounded-[32px] border border-[#2c2c38] bg-[#14141d] lg:grid-cols-[1.4fr_1fr]"
      >
        <div class="relative aspect-video bg-gradient-to-br from-[#312e81] via-[#4c1d95] to-[#111827]">
          <div class="flex h-full w-full items-center justify-center">
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full bg-black/30 backdrop-blur-md transition hover:scale-110"
            >
              <div class="ml-1 h-0 w-0 border-y-[15px] border-l-[24px] border-y-transparent border-l-white"></div>
            </div>
          </div>

          <span class="absolute bottom-4 right-4 rounded-lg bg-black/80 px-3 py-1 text-sm font-semibold text-white">
            {{ mainTrend.duration }}
          </span>

          <span class="absolute left-4 top-4 rounded-full bg-[#7c3aed] px-4 py-2 text-sm font-semibold text-white">
            #1 в трендах
          </span>
        </div>

        <div class="flex flex-col justify-center p-8">
          <p class="mb-3 text-sm font-semibold text-[#a78bfa]">
            {{ mainTrend.category }}
          </p>

          <h3 class="text-3xl font-bold leading-tight text-white">
            {{ mainTrend.title }}
          </h3>

          <p class="mt-4 text-[#aaaab7]">
            {{ mainTrend.description }}
          </p>

          <div class="mt-6 flex items-center gap-3">
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#252536] font-bold text-white"
            >
              {{ mainTrend.channel[0] }}
            </div>

            <div>
              <p class="font-semibold text-white">
                {{ mainTrend.channel }}
              </p>

              <p class="text-sm text-[#777786]">
                {{ mainTrend.views }} просмотров • {{ mainTrend.date }}
              </p>
            </div>
          </div>

          <button
            class="mt-8 w-fit rounded-2xl bg-[#7c3aed] px-6 py-3 font-semibold text-white transition hover:bg-[#8b5cf6]"
          >
            Смотреть
          </button>
        </div>
      </article>
    </section>

    <!-- Trending list -->
    <section>
      <div class="mb-5 flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-white">
            Сейчас смотрят
          </h2>

          <p class="mt-1 text-sm text-[#aaaab7]">
            Самые быстрорастущие видео за выбранный период
          </p>
        </div>
      </div>

      <div class="space-y-5">
        <article
          v-for="(video, index) in trendingVideos"
          :key="video.id"
          class="group grid cursor-pointer gap-5 rounded-[28px] border border-[#2c2c38] bg-[#14141d] p-4 transition hover:border-[#7c3aed] md:grid-cols-[220px_1fr_auto]"
        >
          <!-- Thumbnail -->
          <div
            class="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br"
            :class="video.gradient"
          >
            <div class="flex h-full w-full items-center justify-center">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-md transition group-hover:scale-110">
                <div class="ml-1 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-white"></div>
              </div>
            </div>

            <span class="absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-1 text-xs font-semibold text-white">
              {{ video.duration }}
            </span>
          </div>

          <!-- Info -->
          <div class="flex min-w-0 flex-col justify-center">
            <div class="mb-2 flex items-center gap-2">
              <span class="rounded-full bg-[#191923] px-3 py-1 text-xs font-semibold text-[#a78bfa]">
                #{{ index + 2 }}
              </span>

              <span class="text-xs text-[#777786]">
                {{ video.category }}
              </span>
            </div>

            <h3 class="line-clamp-2 text-xl font-bold text-white transition group-hover:text-[#a78bfa]">
              {{ video.title }}
            </h3>

            <p class="mt-2 line-clamp-2 text-sm leading-6 text-[#aaaab7]">
              {{ video.description }}
            </p>

            <div class="mt-4 flex items-center gap-3">
              <div class="flex h-9 w-9 items-center justify-center rounded-full bg-[#252536] text-sm font-bold text-white">
                {{ video.channel[0] }}
              </div>

              <div>
                <p class="text-sm font-semibold text-white">
                  {{ video.channel }}
                </p>

                <p class="text-sm text-[#777786]">
                  {{ video.views }} просмотров • {{ video.date }}
                </p>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="flex items-center gap-4 md:flex-col md:items-end md:justify-center">
            <div class="rounded-2xl bg-[#191923] px-4 py-3 text-right">
              <p class="text-sm text-[#aaaab7]">Рост</p>
              <p class="font-bold text-[#a78bfa]">{{ video.growth }}</p>
            </div>

            <div class="rounded-2xl bg-[#191923] px-4 py-3 text-right">
              <p class="text-sm text-[#aaaab7]">Лайки</p>
              <p class="font-bold text-white">{{ video.likes }}</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const activeFilter = ref('Сегодня')

const filters = [
  'Сегодня',
  'Неделя',
  'Месяц',
  'Музыка',
  'Игры',
  'Технологии',
  'Новости'
]

const mainTrend = {
  title: 'Почему все обсуждают новый формат коротких видео',
  description:
    'Большой разбор того, как короткие ролики меняют платформы, авторов и привычки зрителей.',
  channel: 'МедиаКласс',
  views: '1,8 млн.',
  date: '8 часов назад',
  duration: '24:18',
  category: 'Технологии'
}

const trendingVideos = [
  {
    id: 1,
    title: 'Топ-10 моментов недели, которые взорвали интернет',
    description: 'Самые обсуждаемые события, мемы, ролики и реакции пользователей за последние дни.',
    channel: 'ТрендОбзор',
    views: '940 тыс.',
    date: '4 часа назад',
    duration: '16:42',
    category: 'Новости',
    growth: '+248%',
    likes: '82 тыс.',
    gradient: 'from-[#1e1b4b] via-[#4c1d95] to-[#111827]'
  },
  {
    id: 2,
    title: 'Новая игра неожиданно стала хитом: полный обзор',
    description: 'Разбираем механику, графику, сюжет и причины резкого роста популярности.',
    channel: 'ИгроПульс',
    views: '720 тыс.',
    date: '6 часов назад',
    duration: '28:03',
    category: 'Игры',
    growth: '+193%',
    likes: '61 тыс.',
    gradient: 'from-[#111827] via-[#374151] to-[#312e81]'
  },
  {
    id: 3,
    title: 'Музыкальный лайв, который сейчас слушают все',
    description: 'Атмосферное выступление в студии с живым звуком и необычной визуальной подачей.',
    channel: 'ЗвукLive',
    views: '610 тыс.',
    date: '10 часов назад',
    duration: '39:55',
    category: 'Музыка',
    growth: '+171%',
    likes: '74 тыс.',
    gradient: 'from-[#2e1065] via-[#4c1d95] to-[#18181b]'
  },
  {
    id: 4,
    title: 'Искусственный интеллект научился делать это лучше людей?',
    description: 'Объясняем простыми словами, где ИИ уже реально помогает, а где всё ещё ошибается.',
    channel: 'AI Лаборатория',
    views: '1,1 млн.',
    date: '1 день назад',
    duration: '21:30',
    category: 'Технологии',
    growth: '+156%',
    likes: '96 тыс.',
    gradient: 'from-[#020617] via-[#1e293b] to-[#3730a3]'
  },
  {
    id: 5,
    title: 'Интервью, которое разлетелось на цитаты',
    description: 'Честный разговор о карьере, ошибках, медиа и будущем российского интернета.',
    channel: 'Открытый эфир',
    views: '860 тыс.',
    date: '1 день назад',
    duration: '1:08:44',
    category: 'Интервью',
    growth: '+139%',
    likes: '58 тыс.',
    gradient: 'from-[#18181b] via-[#3f3f46] to-[#4c1d95]'
  }
]
</script>