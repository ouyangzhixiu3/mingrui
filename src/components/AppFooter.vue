<script setup lang="ts">
import { companyProfile, contactChannels, footerScenarioLinks, navItems } from '../data/site'

const quickLinks = navItems.filter((item) => !item.cta)
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative overflow-hidden bg-slate-950 px-6 pb-10 pt-20 text-slate-300">
    <div class="tech-grid absolute inset-0 opacity-20"></div>
    <div class="hero-scanline absolute inset-0 opacity-15"></div>
    <div class="absolute right-[-180px] top-[-80px] h-72 w-72 rounded-full bg-sky-500/12 blur-3xl"></div>
    <div class="absolute bottom-[-140px] left-[-120px] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-semibold text-sky-300">
              MR
            </div>
            <div>
              <p class="text-lg font-semibold text-white">{{ companyProfile.name }}</p>
              <p class="text-xs uppercase tracking-[0.28em] text-slate-400">
                {{ companyProfile.nameEn }}
              </p>
            </div>
          </div>

          <p class="mt-6 max-w-md leading-8 text-slate-400">
            {{ companyProfile.summary }}
          </p>

          <RouterLink
            to="/contact"
            class="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-300/40 hover:text-sky-200"
          >
            获取方案咨询
          </RouterLink>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Navigation
          </p>
          <div class="mt-5 space-y-3">
            <RouterLink
              v-for="item in quickLinks"
              :key="item.to"
              :to="item.to"
              class="block text-sm text-slate-300 transition hover:text-white"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Scenarios
          </p>
          <div class="mt-5 flex flex-wrap gap-3">
            <span
              v-for="scenario in footerScenarioLinks"
              :key="scenario"
              class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
            >
              {{ scenario }}
            </span>
          </div>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Contact
          </p>
          <div class="mt-5 space-y-5">
            <div v-for="channel in contactChannels" :key="channel.label" class="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p class="text-sm font-medium text-white">{{ channel.label }}</p>
              <a
                v-if="channel.href"
                :href="channel.href"
                class="mt-2 block text-sm text-sky-300 transition hover:text-sky-200"
              >
                {{ channel.value }}
              </a>
              <p v-else class="mt-2 text-sm text-slate-200">
                {{ channel.value }}
              </p>
              <p class="mt-2 text-sm leading-6 text-slate-400">
                {{ channel.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {{ currentYear }} {{ companyProfile.name }}. All Rights Reserved.</p>
        <p>Precision metrology systems for semiconductor, research and industrial inspection.</p>
      </div>
    </div>
  </footer>
</template>
