<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description: string
    primaryLabel: string
    primaryTo: string
    secondaryLabel?: string
    secondaryTo?: string
  }>(),
  {
    secondaryLabel: '',
    secondaryTo: '',
  },
)
</script>

<template>
  <section class="px-6 py-24">
    <div class="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-slate-950 p-10 text-white md:p-14">
      <div class="tech-grid absolute inset-0 opacity-25"></div>
      <div class="hero-scanline absolute inset-0 opacity-20"></div>
      <div class="absolute right-[-120px] top-[-80px] h-64 w-64 rounded-full bg-sky-500/15 blur-3xl"></div>
      <div class="absolute bottom-[-120px] left-[-80px] h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <p class="relative text-xs font-semibold uppercase tracking-[0.34em] text-sky-300">
        {{ eyebrow }}
      </p>

      <div class="relative mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
            {{ title }}
          </h2>
          <p class="mt-4 leading-8 text-slate-300">
            {{ description }}
          </p>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
          <RouterLink
            :to="primaryTo"
            class="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 font-medium text-white shadow-[0_18px_40px_rgba(14,165,233,0.35)] transition hover:bg-sky-400"
          >
            {{ primaryLabel }}
          </RouterLink>

          <RouterLink
            v-if="secondaryLabel && secondaryTo"
            :to="secondaryTo"
            class="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 font-medium text-slate-100 transition hover:border-sky-300 hover:text-sky-200"
          >
            {{ secondaryLabel }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
