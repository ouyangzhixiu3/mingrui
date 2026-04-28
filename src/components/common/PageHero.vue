<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description: string
    chips?: string[]
  }>(),
  {
    chips: () => [],
  },
)
</script>

<template>
  <section class="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-40 text-white">
    <div class="tech-grid absolute inset-0 opacity-25"></div>
    <div class="hero-scanline absolute inset-0 opacity-35"></div>
    <div class="absolute right-[-140px] top-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
    <div class="absolute bottom-[-140px] left-[-120px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl">
      <div class="max-w-4xl">
        <p class="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300">
          {{ eyebrow }}
        </p>
        <h1 class="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {{ title }}
        </h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {{ description }}
        </p>

        <div v-if="chips.length" class="mt-8 flex flex-wrap gap-3">
          <span
            v-for="chip in chips"
            :key="chip"
            class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
          >
            {{ chip }}
          </span>
        </div>

        <slot />
      </div>
    </div>
  </section>
</template>
