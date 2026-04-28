<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    description?: string
    linkLabel?: string
    linkTo?: string
    light?: boolean
  }>(),
  {
    description: '',
    linkLabel: '',
    linkTo: '',
    light: false,
  },
)
</script>

<template>
  <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
    <div class="max-w-3xl">
      <p
        class="text-xs font-semibold uppercase tracking-[0.32em]"
        :class="light ? 'text-sky-300' : 'text-sky-600'"
      >
        {{ eyebrow }}
      </p>
      <h2
        class="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
        :class="light ? 'text-white' : 'text-slate-950'"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-4 max-w-3xl leading-8"
        :class="light ? 'text-slate-300' : 'text-slate-600'"
      >
        {{ description }}
      </p>
    </div>

    <RouterLink
      v-if="linkLabel && linkTo"
      :to="linkTo"
      class="inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3"
      :class="light ? 'text-sky-300 hover:text-sky-200' : 'text-sky-700 hover:text-sky-600'"
    >
      {{ linkLabel }}
      <span aria-hidden="true">&rarr;</span>
    </RouterLink>
  </div>
</template>
