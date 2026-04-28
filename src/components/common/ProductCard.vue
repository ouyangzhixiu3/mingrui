<script setup lang="ts">
import type { ProductItem } from '../../data/types'

defineProps<{
  item: ProductItem
}>()
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-[30px] border border-slate-200/70 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:shadow-[0_28px_70px_rgba(14,165,233,0.12)]"
  >
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_45%)] opacity-0 transition group-hover:opacity-100"></div>

    <div class="relative">
      <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
            {{ item.tag }}
          </p>
          <h3 class="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
            {{ item.title }}
          </h3>
        </div>
        <div class="rounded-2xl border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
          {{ item.keywords[0] }}
        </div>
      </div>

      <p class="mt-6 leading-8 text-slate-600">
        {{ item.description }}
      </p>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="keyword in item.keywords"
          :key="keyword"
          class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
        >
          {{ keyword }}
        </span>
      </div>

      <div class="mt-8 grid gap-3 sm:grid-cols-2">
        <div
          v-for="feature in item.features"
          :key="feature"
          class="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-4 text-sm text-slate-600 transition group-hover:border-sky-200 group-hover:bg-sky-50/70"
        >
          {{ feature }}
        </div>
      </div>

      <div class="mt-8">
        <p class="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
          适用场景
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <span
            v-for="application in item.applications"
            :key="application"
            class="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-slate-100"
          >
            {{ application }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>
