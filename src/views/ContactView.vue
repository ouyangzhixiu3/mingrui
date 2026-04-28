<script setup lang="ts">
import CtaSection from '../components/common/CtaSection.vue'
import FeatureCard from '../components/common/FeatureCard.vue'
import PageHero from '../components/common/PageHero.vue'
import SectionHeader from '../components/common/SectionHeader.vue'
import { serviceProcess } from '../data/capabilities'
import {
  contactFormOptions,
  contactHero,
  contactPreparationNotes,
  contactSupportHighlights,
} from '../data/pages'
import { contactChannels } from '../data/site'
</script>

<template>
  <main class="bg-slate-50 text-slate-950">
    <PageHero
      :eyebrow="contactHero.eyebrow"
      :title="contactHero.title"
      :description="contactHero.description"
      :chips="contactHero.chips"
    />

    <section class="px-6 py-24">
      <div class="mx-auto grid max-w-7xl gap-10 xl:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Business Contact"
            title="让咨询入口更像正式的方案沟通页"
            description="联系页不仅提供联系方式，也提示用户准备更有价值的信息，方便后续快速进入技术沟通。"
          />

          <div class="mt-8 space-y-5">
            <div
              v-for="channel in contactChannels"
              :key="channel.label"
              class="rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
                {{ channel.label }}
              </p>
              <a
                v-if="channel.href"
                :href="channel.href"
                class="mt-3 block text-lg font-semibold text-slate-950 transition hover:text-sky-700"
              >
                {{ channel.value }}
              </a>
              <p v-else class="mt-3 text-lg font-semibold text-slate-950">
                {{ channel.value }}
              </p>
              <p class="mt-3 leading-7 text-slate-600">
                {{ channel.description }}
              </p>
            </div>
          </div>

          <div class="mt-8 grid gap-6">
            <FeatureCard
              v-for="item in contactSupportHighlights"
              :key="item.title"
              :eyebrow="item.eyebrow"
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>

        <div class="rounded-[32px] border border-slate-200/70 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] md:p-10">
          <div class="flex flex-col gap-4 border-b border-slate-200 pb-6">
            <p class="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
              Consulting Form
            </p>
            <h2 class="text-3xl font-semibold tracking-tight text-slate-950">
              提交检测场景与量测需求
            </h2>
            <p class="leading-7 text-slate-600">
              当前为静态展示版，表单暂不提交到后端。你可以先整理关键条件，再继续接入真实表单服务。
            </p>
          </div>

          <div class="mt-6">
            <p class="text-sm font-medium text-slate-700">建议优先准备的信息</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="item in contactPreparationNotes"
                :key="item"
                class="rounded-full border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-sky-700"
              >
                {{ item }}
              </span>
            </div>
          </div>

          <form class="mt-8 space-y-5">
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                联系人姓名
              </label>
              <input
                type="text"
                placeholder="请输入联系人姓名"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">
                  联系电话
                </label>
                <input
                  type="text"
                  placeholder="请输入联系电话"
                  class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">
                  邮箱地址
                </label>
                <input
                  type="email"
                  placeholder="请输入邮箱地址"
                  class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                咨询类型
              </label>
              <select
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              >
                <option
                  v-for="item in contactFormOptions"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                检测对象与场景说明
              </label>
              <textarea
                rows="4"
                placeholder="例如：晶圆表面质量检测、CMP 平坦化评估、微纳米三维结构量测等"
                class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              ></textarea>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                关键量测指标
              </label>
              <textarea
                rows="4"
                placeholder="建议说明精度要求、结构维度、样品数量、数据输出方式和部署环境"
                class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              ></textarea>
            </div>

            <button
              type="button"
              class="w-full rounded-full bg-sky-500 px-8 py-3 font-medium text-white shadow-[0_18px_40px_rgba(14,165,233,0.3)] transition hover:bg-sky-400"
            >
              提交咨询信息
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="bg-white px-6 py-24">
      <div class="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Service Process"
          title="咨询与合作流程也保持统一的系统化表达"
          description="即使是联系页，也继续遵循技术企业官网的结构逻辑，而不是停留在简单表单层面。"
        />

        <div class="mt-12 grid gap-6 xl:grid-cols-4">
          <FeatureCard
            v-for="item in serviceProcess"
            :key="item.step"
            :index="item.step"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </section>

    <CtaSection
      eyebrow="Next Step"
      title="准备好样品信息后，可以直接进入更具体的技术讨论"
      description="如果你还在比较不同设备方向，可以先返回产品中心；如果已经明确场景，当前联系页已经具备正式咨询入口的展示形态。"
      primary-label="查看产品中心"
      primary-to="/products"
      secondary-label="返回首页"
      secondary-to="/"
    />
  </main>
</template>
