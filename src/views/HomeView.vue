<script setup lang="ts">
import CtaSection from '../components/common/CtaSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import ProductCard from '../components/common/ProductCard.vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import {
  capabilityModules,
  heroConsoleItems,
  heroMetrics,
  strengthHighlights,
} from '../data/capabilities'
import { applicationScenarios } from '../data/applications'
import { products } from '../data/products'
import { companyProfile } from '../data/site'
import { workflowSteps } from '../data/technologies'
</script>

<template>
  <main class="bg-slate-50 text-slate-950">
    <section class="relative overflow-hidden bg-slate-950 px-6 pb-24 pt-36 text-white md:pt-40">
      <div class="tech-grid absolute inset-0 opacity-25"></div>
      <div class="hero-scanline absolute inset-0 opacity-30"></div>
      <div class="absolute right-[-180px] top-16 h-[420px] w-[420px] rounded-full bg-sky-500/18 blur-3xl"></div>
      <div class="absolute bottom-[-220px] left-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/12 blur-3xl"></div>

      <div class="relative mx-auto grid max-w-7xl items-center gap-14 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div class="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
            Precision Metrology Platform
          </div>

          <p class="mt-8 text-sm uppercase tracking-[0.34em] text-slate-400">
            {{ companyProfile.tagline }}
          </p>

          <h1 class="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            半导体精密量测与微纳米三维检测平台
          </h1>

          <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {{ companyProfile.summary }}
            面向晶圆检测、CMP 工艺控制、三维结构量测与科研计量场景，提供兼顾精度、稳定性与工程交付能力的系统方案。
          </p>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row">
            <RouterLink
              to="/products"
              class="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-3 font-medium text-white shadow-[0_18px_40px_rgba(14,165,233,0.35)] transition hover:bg-sky-400"
            >
              查看产品中心
            </RouterLink>

            <RouterLink
              to="/contact"
              class="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-3 font-medium text-slate-100 transition hover:border-sky-300 hover:text-sky-200"
            >
              获取方案咨询
            </RouterLink>
          </div>

          <div class="mt-10 flex flex-wrap gap-3">
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Wafer Inspection
            </span>
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              CMP Metrology
            </span>
            <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              3D Reconstruction
            </span>
          </div>
        </div>

        <div class="relative">
          <div class="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_90px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:p-8">
            <div class="flex flex-col gap-6 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p class="text-xs uppercase tracking-[0.32em] text-sky-300">Measurement Console</p>
                <h2 class="mt-3 text-2xl font-semibold tracking-tight">
                  精密检测系统控制台
                </h2>
              </div>

              <div class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">
                System Stable
              </div>
            </div>

            <div class="mt-6 space-y-3">
              <div
                v-for="item in heroConsoleItems"
                :key="item.label"
                class="flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/70 px-5 py-4"
              >
                <div>
                  <p class="text-xs uppercase tracking-[0.3em] text-slate-500">{{ item.label }}</p>
                  <p class="mt-2 text-base font-semibold text-white">{{ item.value }}</p>
                </div>
                <div class="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  <span class="h-2 w-2 rounded-full bg-emerald-300"></span>
                  {{ item.status }}
                </div>
              </div>
            </div>

            <div class="mt-6 rounded-[28px] border border-white/10 bg-slate-950/75 p-5">
              <div class="flex items-center justify-between gap-4">
                <p class="text-xs uppercase tracking-[0.3em] text-slate-400">Core Directions</p>
                <p class="text-xs uppercase tracking-[0.28em] text-sky-300">Optics / Motion / Analysis</p>
              </div>

              <div class="mt-4 grid gap-3 sm:grid-cols-3">
                <div
                  v-for="item in strengthHighlights"
                  :key="item.title"
                  class="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p class="text-xs uppercase tracking-[0.28em] text-slate-400">{{ item.index }}</p>
                  <p class="mt-3 text-sm font-medium text-white">{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-6 -right-4 hidden rounded-[28px] border border-sky-300/20 bg-sky-500/10 px-6 py-5 backdrop-blur-xl xl:block">
            <p class="text-xs uppercase tracking-[0.28em] text-sky-200">Application Focus</p>
            <p class="mt-2 text-lg font-semibold text-white">Wafer / CMP / 3D Profile</p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Strength Stats"
          title="以核心量测能力构建高端设备表达"
          description="通过能力指标、系统方向与工程交付视角，建立半导体精密量测平台的专业形象。"
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            v-for="item in heroMetrics"
            :key="item.label"
            :value="item.value"
            :title="item.label"
            :description="item.description"
            hover
          />
        </div>

        <div class="mt-8 grid gap-6 xl:grid-cols-3">
          <FeatureCard
            v-for="item in strengthHighlights"
            :key="item.title"
            :index="item.index"
            :title="item.title"
            :description="item.description"
            :tags="item.tags"
          />
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology System"
          title="从核心部件到整机系统的综合研发能力"
          description="围绕光学测量、精密机械、运动控制、信号采集、算法分析与工业软件，形成完整技术体系。"
          link-label="查看核心技术"
          link-to="/technology"
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <FeatureCard
            v-for="item in capabilityModules"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :description="item.description"
            :tags="item.tags"
          />
        </div>
      </div>
    </section>

    <section class="px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Product Matrix"
          title="面向精密检测场景的产品矩阵"
          description="以产品方向、应用场景、核心能力与技术关键词构建更专业的产品表达，而不是静态信息堆叠。"
          link-label="进入产品中心"
          link-to="/products"
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-2">
          <ProductCard
            v-for="item in products"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div class="tech-grid absolute inset-0 opacity-25"></div>
      <div class="hero-scanline absolute inset-0 opacity-20"></div>
      <div class="absolute right-[-200px] top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Application Scenarios"
          title="技术平台覆盖多种先进制造与计量场景"
          description="从半导体制造到科研计量，再到工业精密检测，页面用数据卡片而不是普通列表来承载应用表达。"
          light
        />

        <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in applicationScenarios"
            :key="item.id"
            class="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/35"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-xs uppercase tracking-[0.3em] text-sky-300">{{ item.index }}</p>
                <h3 class="mt-4 text-xl font-semibold text-white">{{ item.title }}</h3>
              </div>
              <span class="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                {{ item.labelEn }}
              </span>
            </div>

            <p class="mt-5 leading-7 text-slate-300">
              {{ item.description }}
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="keyword in item.keywords"
                :key="keyword"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {{ keyword }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Workflow"
          title="检测链路从样品定位延伸到工艺反馈"
          description="将检测对象、运动控制、信号采集、算法分析与报告输出串成一条完整流程，更能体现设备企业的技术壁垒。"
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-4">
          <FeatureCard
            v-for="item in workflowSteps"
            :key="item.step"
            :index="item.step"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <CtaSection
      eyebrow="Consulting"
      title="面向您的检测场景，构建专属测量方案"
      description="可根据样品类型、工艺环节、测量指标与产线环境，提供产品配置、技术沟通与解决方案建议。"
      primary-label="获取方案咨询"
      primary-to="/contact"
      secondary-label="查看产品中心"
      secondary-to="/products"
    />
  </main>
</template>
