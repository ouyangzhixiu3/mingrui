<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { companyProfile, navItems } from '../data/site'

const isMenuOpen = ref(false)
const route = useRoute()

const primaryNav = navItems.filter((item) => !item.cta)
const ctaNav = navItems.find((item) => item.cta)

const isActive = (path: string) => route.path === path

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
      <div class="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/80 shadow-[0_24px_60px_rgba(2,6,23,0.35)] backdrop-blur-2xl">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_42%)]"></div>
        <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"></div>

        <div class="relative flex h-[78px] items-center justify-between px-5 sm:px-6">
          <RouterLink to="/" class="min-w-0">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-sky-300">
                MR
              </div>
              <div class="min-w-0">
                <p class="truncate text-base font-semibold tracking-[0.08em] text-white sm:text-lg">
                  {{ companyProfile.name }}
                </p>
                <p class="truncate text-[11px] uppercase tracking-[0.28em] text-slate-400">
                  {{ companyProfile.tagline }}
                </p>
              </div>
            </div>
          </RouterLink>

          <nav class="hidden items-center gap-2 md:flex">
            <RouterLink
              v-for="item in primaryNav"
              :key="item.to"
              :to="item.to"
              class="rounded-full px-4 py-2 text-sm font-medium transition"
              :class="
                isActive(item.to)
                  ? 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              "
            >
              {{ item.label }}
            </RouterLink>

            <RouterLink
              v-if="ctaNav"
              :to="ctaNav.to"
              class="ml-3 inline-flex items-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-[0_16px_35px_rgba(14,165,233,0.34)] transition hover:bg-sky-400"
              :class="isActive(ctaNav.to) ? 'bg-sky-400' : ''"
            >
              {{ ctaNav.label }}
            </RouterLink>
          </nav>

          <button
            type="button"
            class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-sky-300/40 hover:text-sky-200 md:hidden"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="relative h-4 w-5">
              <span
                class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition"
                :class="isMenuOpen ? 'translate-y-[7px] rotate-45' : ''"
              ></span>
              <span
                class="absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition"
                :class="isMenuOpen ? 'opacity-0' : ''"
              ></span>
              <span
                class="absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition"
                :class="isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"
              ></span>
            </span>
          </button>
        </div>

        <div
          v-if="isMenuOpen"
          class="relative border-t border-white/10 px-5 pb-5 pt-4 md:hidden"
        >
          <div class="space-y-3">
            <RouterLink
              v-for="item in primaryNav"
              :key="item.to"
              :to="item.to"
              class="flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition"
              :class="
                isActive(item.to)
                  ? 'border-sky-300/30 bg-sky-400/10 text-white'
                  : 'border-white/10 bg-white/5 text-slate-200 hover:border-sky-300/30 hover:text-white'
              "
            >
              <span>{{ item.label }}</span>
              <span class="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                {{ item.labelEn }}
              </span>
            </RouterLink>

            <RouterLink
              v-if="ctaNav"
              :to="ctaNav.to"
              class="flex items-center justify-center rounded-2xl bg-sky-500 px-4 py-3 text-sm font-medium text-white shadow-[0_16px_35px_rgba(14,165,233,0.3)] transition hover:bg-sky-400"
            >
              {{ ctaNav.label }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
