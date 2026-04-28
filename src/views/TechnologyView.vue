<script setup lang="ts">
import CtaSection from '../components/common/CtaSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import PageHero from '../components/common/PageHero.vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import { capabilityModules } from '../data/capabilities'
import { technologyArchitecture, technologyHero } from '../data/pages'
import { technologyPillars, workflowSteps } from '../data/technologies'
</script>

<template>
  <main class="bg-slate-50 text-slate-950">
    <PageHero
      :eyebrow="technologyHero.eyebrow"
      :title="technologyHero.title"
      :description="technologyHero.description"
      :chips="technologyHero.chips"
    />

    <section class="px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technical Pillars"
          title="核心技术方向从检测需求中自然展开"
          description="先解释做什么，再解释如何做，避免技术页只剩抽象名词堆叠。"
        />

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            v-for="item in technologyPillars"
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
          eyebrow="Capability Modules"
          title="技术平台由多个协同模块共同支撑"
          description="将光学、机械、控制、采集、算法和软件拆成独立模块，形成更可信的系统视图。"
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

    <section class="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
      <div class="tech-grid absolute inset-0 opacity-25"></div>
      <div class="hero-scanline absolute inset-0 opacity-20"></div>
      <div class="absolute left-[-160px] top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div class="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Architecture Flow"
          title="检测链路可以被解释为一条清晰的技术路径"
          description="从检测对象到结果反馈，每个阶段都有明确的工程角色与系统职责。"
          light
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-4">
          <FeatureCard
            v-for="item in technologyArchitecture"
            :key="item.title"
            tone="dark"
            :index="item.index"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Workflow"
          title="从数据采集到工艺反馈形成完整量测闭环"
          description="技术页不仅展示模块，还展示流程，让系统化能力更易被理解。"
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
      eyebrow="Technology Consulting"
      title="围绕工艺环节与量测目标展开更深入的技术沟通"
      description="如果你已经明确检测对象或需要讨论特定工艺场景，可以直接进入方案咨询页继续细化需求。"
      primary-label="进入方案咨询"
      primary-to="/contact"
      secondary-label="查看产品矩阵"
      secondary-to="/products"
    />
  </main>
</template>
