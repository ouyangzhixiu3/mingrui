<script setup lang="ts">
import CtaSection from '../components/common/CtaSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import PageHero from '../components/common/PageHero.vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import { aboutHighlights, capabilityModules, heroMetrics } from '../data/capabilities'
import {
  aboutHero,
  aboutOperatingPrinciples,
  aboutOverview,
  aboutPositioningCards,
} from '../data/pages'
</script>

<template>
  <main class="bg-slate-50 text-slate-950">
    <PageHero
      :eyebrow="aboutHero.eyebrow"
      :title="aboutHero.title"
      :description="aboutHero.description"
      :chips="aboutHero.chips"
    />

    <section class="px-6 py-24">
      <div class="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeader
            :eyebrow="aboutOverview.eyebrow"
            :title="aboutOverview.title"
            :description="aboutOverview.paragraphs[0]"
          />

          <div class="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p v-for="paragraph in aboutOverview.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="grid gap-6">
          <FeatureCard
            v-for="item in aboutPositioningCards"
            :key="item.title"
            :eyebrow="item.eyebrow"
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
          eyebrow="Core Metrics"
          title="用能力指标和企业原则强化技术型品牌表达"
          description="避免空泛描述，通过技术方向、系统模块与组织原则建立更清晰的企业形象。"
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            v-for="item in heroMetrics"
            :key="item.label"
            :value="item.value"
            :title="item.label"
            :description="item.description"
          />
        </div>

        <div class="mt-8 grid gap-6 xl:grid-cols-3">
          <FeatureCard
            v-for="item in aboutHighlights"
            :key="item.title"
            :value="item.value"
            :title="item.title"
            :description="item.description"
          />
        </div>

        <div class="mt-8 grid gap-6 xl:grid-cols-3">
          <FeatureCard
            v-for="item in aboutOperatingPrinciples"
            :key="item.title"
            :index="item.index"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <section class="px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="R&D System"
          title="研发能力覆盖从模块设计到整机交付的关键链路"
          description="用统一的组件结构展示多学科协同能力，让关于页也具备明显的工程化表达。"
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

    <CtaSection
      eyebrow="Vision"
      title="从精密量测平台能力延伸到更完整的行业解决方案表达"
      description="网站内容将继续围绕半导体检测、微纳米测量与系统集成能力迭代，让企业形象、技术能力和业务沟通逻辑保持一致。"
      primary-label="获取方案咨询"
      primary-to="/contact"
      secondary-label="查看产品中心"
      secondary-to="/products"
    />
  </main>
</template>
