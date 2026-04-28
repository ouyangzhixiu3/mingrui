<script setup lang="ts">
import CtaSection from '../components/common/CtaSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import PageHero from '../components/common/PageHero.vue'
import ProductCard from '../components/common/ProductCard.vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import { applicationScenarios } from '../data/applications'
import { productHero, productSelectionGuides } from '../data/pages'
import { productAdvantages, products } from '../data/products'
</script>

<template>
  <main class="bg-slate-50 text-slate-950">
    <PageHero
      :eyebrow="productHero.eyebrow"
      :title="productHero.title"
      :description="productHero.description"
      :chips="productHero.chips"
    />

    <section class="px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Products"
          title="以产品矩阵而不是静态卡片组织设备能力"
          description="每张产品卡同时承载应用方向、功能特性、技术关键词和适用场景，信息密度更高，也更适合设备企业官网。"
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

    <section class="bg-white px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Product Features"
          title="产品表达强调稳定性、系统性与场景适配"
          description="相比普通企业官网的白色信息块，这一层更强调设备特性与工程属性。"
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            v-for="item in productAdvantages"
            :key="item.title"
            :index="item.index"
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
          eyebrow="Selection Guide"
          title="根据检测任务选择更合适的产品路径"
          description="把“怎么选产品”拆成对象、结果和部署环境三个角度，增强产品页的咨询价值。"
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-3">
          <FeatureCard
            v-for="item in productSelectionGuides"
            :key="item.title"
            :eyebrow="item.eyebrow"
            :title="item.title"
            :description="item.description"
            :tags="item.tags"
          />
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div class="tech-grid absolute inset-0 opacity-25"></div>
      <div class="hero-scanline absolute inset-0 opacity-20"></div>
      <div class="absolute right-[-180px] top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Application Fit"
          title="产品矩阵最终仍然服务于具体应用场景"
          description="将典型应用场景放回产品页，可以帮助用户更快建立“场景到产品”的对应关系。"
          light
        />

        <div class="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="item in applicationScenarios"
            :key="item.id"
            class="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/35"
          >
            <div class="flex items-center justify-between gap-4">
              <p class="text-xs uppercase tracking-[0.28em] text-sky-300">{{ item.index }}</p>
              <span class="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                {{ item.labelEn }}
              </span>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-white">{{ item.title }}</h3>
            <p class="mt-4 leading-7 text-slate-300">{{ item.description }}</p>
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

    <CtaSection
      eyebrow="Product Consulting"
      title="根据样品、工艺和量测目标匹配更合适的设备方案"
      description="如果已经有明确应用场景，可以直接发起咨询；如果还处于选型阶段，也可以先从产品矩阵出发进行技术沟通。"
      primary-label="获取方案咨询"
      primary-to="/contact"
      secondary-label="查看核心技术"
      secondary-to="/technology"
    />
  </main>
</template>
