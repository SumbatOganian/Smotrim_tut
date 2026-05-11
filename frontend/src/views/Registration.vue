<template>
  <div
    class="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-4xl border border-[#2c2c38] bg-[#14141d] text-white shadow-2xl lg:grid-cols-2"
  >
    <!-- Close button -->
    <button
      @click="close"
      class="cursor-pointer absolute right-6 top-5 z-10 text-3xl text-[#aaaab7] transition hover:scale-110 hover:text-white"
    >
      ×
    </button>

    <!-- Left: Registration -->
    <section
      class=" cursor-default relative border-b border-[#2c2c38] bg-[#14141d] p-8 lg:border-b-0 lg:border-r"
    >
      <div
        class="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#7c3aed]/20 blur-3xl"
      ></div>

      <div class="relative">
        <span class="text-sm font-semibold text-[#a78bfa]">
          Новый аккаунт
        </span>

        <h1 class="mt-3 text-4xl font-bold">
          Регистрация
        </h1>

        <p class="mt-3 max-w-sm text-sm leading-6 text-[#aaaab7]">
          Создайте аккаунт, чтобы подписываться на каналы, сохранять видео и загружать свой контент.
        </p>

        <form class="mt-8 space-y-5" @submit.prevent="register">
          <div>
            <label class="mb-2 block text-sm text-[#aaaab7]">
              Имя пользователя
            </label>

            <input
              v-model="registerName"
              type="text"
              placeholder="Например, Sumbat"
              class="w-full cursor-pointer rounded-2xl border border-[#2c2c38] bg-[#161620] px-5 py-4 text-white outline-none transition placeholder:text-[#8f8f9d] focus:border-[#7c3aed] focus:bg-[#1b1b27]"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-[#aaaab7]">
              Email
            </label>

            <input
              v-model="registerEmail"
              type="email"
              placeholder="example@mail.com"
              class="w-full cursor-pointer rounded-2xl border border-[#2c2c38] bg-[#161620] px-5 py-4 text-white outline-none transition placeholder:text-[#8f8f9d] focus:border-[#7c3aed] focus:bg-[#1b1b27]"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-[#aaaab7]">
              Пароль
            </label>

            <input
              v-model="registerPassword"
              type="password"
              placeholder="Придумайте пароль"
              class="w-full cursor-pointer rounded-2xl border border-[#2c2c38] bg-[#161620] px-5 py-4 text-white outline-none transition placeholder:text-[#8f8f9d] focus:border-[#7c3aed] focus:bg-[#1b1b27]"
            />
          </div>

          <button
            type="submit"
            class="w-full cursor-pointer rounded-2xl bg-[#7c3aed] py-4 font-semibold text-white transition hover:bg-[#8b5cf6] active:bg-[#6d28d9]"
          >
            Создать аккаунт
          </button>
        </form>
      </div>
    </section>

    <!-- Right: Login -->
    <section class="cursor-default relative bg-[#101018] p-8">
      <div
        class="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#06b6d4]/10 blur-3xl"
      ></div>

      <div class="relative">
        <span class="text-sm font-semibold text-[#a78bfa]">
          Уже есть аккаунт?
        </span>

        <h2 class="mt-3 text-4xl font-bold">
          Вход
        </h2>

        <p class="mt-3 max-w-sm text-sm leading-6 text-[#aaaab7]">
          Войдите, чтобы продолжить смотреть видео, управлять каналом и получать рекомендации.
        </p>

        <form class="mt-8 space-y-5" @submit.prevent="login">
          <div>
            <label class="mb-2 block text-sm text-[#aaaab7]">
              Email
            </label>

            <input
              v-model="loginEmail"
              type="email"
              placeholder="example@mail.com"
              class="w-full cursor-pointer rounded-2xl border border-[#2c2c38] bg-[#161620] px-5 py-4 text-white outline-none transition placeholder:text-[#8f8f9d] focus:border-[#7c3aed] focus:bg-[#1b1b27]"
            />
          </div>

          <div>
            <label class="mb-2 block text-sm text-[#aaaab7]">
              Пароль
            </label>

            <input
              v-model="loginPassword"
              type="password"
              placeholder="Введите пароль"
              class="w-full cursor-pointer rounded-2xl border border-[#2c2c38] bg-[#161620] px-5 py-4 text-white outline-none transition placeholder:text-[#8f8f9d] focus:border-[#7c3aed] focus:bg-[#1b1b27]"
            />
          </div>

          <div class="flex items-center justify-between text-sm">
            <label class="flex cursor-pointer items-center gap-2 text-[#aaaab7]">
              <input
                type="checkbox"
                class="h-4 w-4 accent-[#7c3aed]"
              />
              Запомнить меня
            </label>

            <button
              type="button"
              class="text-[#a78bfa] transition hover:text-[#c4b5fd] cursor-pointer"
            >
              Забыли пароль?
            </button>
          </div>

          <button
            type="submit"
            class="w-full cursor-pointer rounded-2xl border border-[#2c2c38] bg-[#191923] py-4 font-semibold text-white transition hover:border-[#7c3aed] hover:bg-[#1f1f2c]"
          >
            Войти
          </button>
        </form>

        <div class="mt-8 rounded-2xl border border-[#2c2c38] bg-[#161620] p-5">
          <p class="text-sm text-[#aaaab7]">
            После входа вы сможете подписываться на каналы, оставлять комментарии и сохранять видео в плейлисты.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')

const loginEmail = ref('')
const loginPassword = ref('')

function close() {
  emit('close')
}

function register() {
  console.log('Регистрация:', {
    name: registerName.value,
    email: registerEmail.value,
    password: registerPassword.value
  })
}

function login() {
  console.log('Вход:', {
    email: loginEmail.value,
    password: loginPassword.value
  })
}
</script>