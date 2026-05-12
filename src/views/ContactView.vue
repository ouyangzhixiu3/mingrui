<script setup lang="ts">
import { ref, computed } from 'vue'
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

// 表单数据
const formData = ref({
  name: '',
  phone: '',
  email: '',
  type: '',
  object: '',
  metrics: '',
})

// 表单错误
const errors = ref({
  name: '',
  phone: '',
  email: '',
  type: '',
  object: '',
  metrics: '',
})

// 提交状态
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

// 验证规则
const validateName = () => {
  if (!formData.value.name.trim()) {
    errors.value.name = '请输入联系人姓名'
    return false
  }
  if (formData.value.name.trim().length < 2) {
    errors.value.name = '姓名至少2个字符'
    return false
  }
  errors.value.name = ''
  return true
}

const validatePhone = () => {
  const phoneRegex = /^1[3-9]\d{9}$/
  if (!formData.value.phone.trim()) {
    errors.value.phone = '请输入联系电话'
    return false
  }
  if (!phoneRegex.test(formData.value.phone.trim())) {
    errors.value.phone = '请输入正确的手机号码'
    return false
  }
  errors.value.phone = ''
  return true
}

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.value.email.trim()) {
    errors.value.email = '请输入邮箱地址'
    return false
  }
  if (!emailRegex.test(formData.value.email.trim())) {
    errors.value.email = '请输入正确的邮箱格式'
    return false
  }
  errors.value.email = ''
  return true
}

const validateType = () => {
  if (!formData.value.type) {
    errors.value.type = '请选择咨询类型'
    return false
  }
  errors.value.type = ''
  return true
}

const validateObject = () => {
  if (!formData.value.object.trim()) {
    errors.value.object = '请输入检测对象与场景说明'
    return false
  }
  if (formData.value.object.trim().length < 10) {
    errors.value.object = '请详细描述检测对象（至少10个字符）'
    return false
  }
  errors.value.object = ''
  return true
}

const validateMetrics = () => {
  if (!formData.value.metrics.trim()) {
    errors.value.metrics = '请输入关键量测指标'
    return false
  }
  if (formData.value.metrics.trim().length < 10) {
    errors.value.metrics = '请详细描述量测指标（至少10个字符）'
    return false
  }
  errors.value.metrics = ''
  return true
}

// 实时验证
const touchField = (field: 'name' | 'phone' | 'email' | 'type' | 'object' | 'metrics') => {
  switch (field) {
    case 'name': validateName(); break
    case 'phone': validatePhone(); break
    case 'email': validateEmail(); break
    case 'type': validateType(); break
    case 'object': validateObject(); break
    case 'metrics': validateMetrics(); break
  }
}

// 是否可以提交
const canSubmit = computed(() => {
  return formData.value.name.trim() &&
    formData.value.phone.trim() &&
    formData.value.email.trim() &&
    formData.value.type &&
    formData.value.object.trim() &&
    formData.value.metrics.trim() &&
    !errors.value.name &&
    !errors.value.phone &&
    !errors.value.email &&
    !errors.value.type &&
    !errors.value.object &&
    !errors.value.metrics
})

// 提交表单
const handleSubmit = async () => {
  // 验证所有字段
  const isValid =
    validateName() &&
    validatePhone() &&
    validateEmail() &&
    validateType() &&
    validateObject() &&
    validateMetrics()

  if (!isValid) {
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    // 模拟 API 调用
    await new Promise(resolve => setTimeout(resolve, 1500))

    // TODO: 实际项目中替换为真实 API 调用
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData.value)
    // })

    console.log('表单数据:', formData.value)
    submitSuccess.value = true

    // 重置表单
    formData.value = {
      name: '',
      phone: '',
      email: '',
      type: '',
      object: '',
      metrics: '',
    }

    // 3秒后隐藏成功消息
    setTimeout(() => {
      submitSuccess.value = false
    }, 3000)
  } catch (error) {
    submitError.value = '提交失败，请稍后重试或拨打客服电话'
  } finally {
    isSubmitting.value = false
  }
}

// 输入样式
const getInputClass = (hasError: boolean) => {
  return `w-full rounded-2xl border px-4 py-3 outline-none transition focus:ring-4 ${
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
      : 'border-slate-200 focus:border-sky-500 focus:ring-sky-100'
  }`
}
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

          <form class="mt-8 space-y-5" @submit.prevent="handleSubmit">
            <!-- 提交成功提示 -->
            <div
              v-if="submitSuccess"
              class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700"
            >
              ✓ 提交成功！我们将尽快与您联系
            </div>

            <!-- 提交错误提示 -->
            <div
              v-if="submitError"
              class="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
            >
              {{ submitError }}
            </div>

            <!-- 联系人姓名 -->
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                联系人姓名 <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.name"
                type="text"
                placeholder="请输入联系人姓名"
                :class="getInputClass(!!errors.name)"
                @blur="touchField('name')"
              />
              <p v-if="errors.name" class="mt-1 text-xs text-red-500">{{ errors.name }}</p>
            </div>

            <!-- 联系电话 & 邮箱 -->
            <div class="grid gap-5 sm:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">
                  联系电话 <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  placeholder="请输入手机号码"
                  :class="getInputClass(!!errors.phone)"
                  @blur="touchField('phone')"
                />
                <p v-if="errors.phone" class="mt-1 text-xs text-red-500">{{ errors.phone }}</p>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">
                  邮箱地址 <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="请输入邮箱地址"
                  :class="getInputClass(!!errors.email)"
                  @blur="touchField('email')"
                />
                <p v-if="errors.email" class="mt-1 text-xs text-red-500">{{ errors.email }}</p>
              </div>
            </div>

            <!-- 咨询类型 -->
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                咨询类型 <span class="text-red-500">*</span>
              </label>
              <select
                v-model="formData.type"
                :class="getInputClass(!!errors.type)"
                @blur="touchField('type')"
              >
                <option value="">请选择咨询类型</option>
                <option
                  v-for="item in contactFormOptions"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
              <p v-if="errors.type" class="mt-1 text-xs text-red-500">{{ errors.type }}</p>
            </div>

            <!-- 检测对象 -->
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                检测对象与场景说明 <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.object"
                rows="4"
                placeholder="例如：晶圆表面质量检测、CMP 平坦化评估、微纳米三维结构量测等"
                :class="getInputClass(!!errors.object)"
                @blur="touchField('object')"
              ></textarea>
              <p v-if="errors.object" class="mt-1 text-xs text-red-500">{{ errors.object }}</p>
            </div>

            <!-- 关键量测指标 -->
            <div>
              <label class="mb-2 block text-sm font-medium text-slate-700">
                关键量测指标 <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="formData.metrics"
                rows="4"
                placeholder="建议说明精度要求、结构维度、样品数量、数据输出方式和部署环境"
                :class="getInputClass(!!errors.metrics)"
                @blur="touchField('metrics')"
              ></textarea>
              <p v-if="errors.metrics" class="mt-1 text-xs text-red-500">{{ errors.metrics }}</p>
            </div>

            <!-- 提交按钮 -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full rounded-full px-8 py-3 font-medium text-white shadow-[0_18px_40px_rgba(14,165,233,0.3)] transition disabled:cursor-not-allowed"
              :class="isSubmitting ? 'bg-slate-400' : 'bg-sky-500 hover:bg-sky-400'"
            >
              <span v-if="isSubmitting" class="inline-flex items-center gap-2">
                <svg class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                提交中...
              </span>
              <span v-else>提交咨询信息</span>
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
