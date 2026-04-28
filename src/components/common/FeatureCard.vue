<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    description: string
    tags?: string[]
    index?: string
    value?: string
    tone?: 'light' | 'dark'
    hover?: boolean
  }>(),
  {
    eyebrow: '',
    tags: () => [],
    index: '',
    value: '',
    tone: 'light',
    hover: true,
  },
)
</script>

<template>
  <article
    class="rounded-[28px] border p-7 transition duration-300"
    :class="[
      tone === 'dark'
        ? 'border-white/10 bg-white/5 text-white backdrop-blur-xl'
        : 'border-slate-200/70 bg-white text-slate-900 shadow-[0_20px_50px_rgba(15,23,42,0.05)]',
      hover ? 'hover:-translate-y-1 hover:border-sky-300/40 hover:shadow-[0_24px_60px_rgba(14,165,233,0.12)]' : '',
    ]"
  >
    <div class="flex items-start justify-between gap-4">
      <div>
        <p
          v-if="eyebrow"
          class="text-xs font-semibold uppercase tracking-[0.28em]"
          :class="tone === 'dark' ? 'text-sky-300' : 'text-sky-700'"
        >
          {{ eyebrow }}
        </p>
        <p
          v-if="index || value"
          class="mt-3 text-sm font-semibold uppercase tracking-[0.28em]"
          :class="tone === 'dark' ? 'text-slate-300' : 'text-slate-500'"
        >
          {{ value || index }}
        </p>
      </div>
    </div>

    <h3 class="mt-4 text-xl font-semibold tracking-tight">
      {{ title }}
    </h3>
    <p
      class="mt-4 leading-7"
      :class="tone === 'dark' ? 'text-slate-300' : 'text-slate-600'"
    >
      {{ description }}
    </p>

    <div v-if="tags.length" class="mt-6 flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full px-3 py-1 text-xs font-medium"
        :class="
          tone === 'dark'
            ? 'border border-white/10 bg-slate-950/70 text-slate-200'
            : 'border border-sky-100 bg-sky-50 text-sky-700'
        "
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>
