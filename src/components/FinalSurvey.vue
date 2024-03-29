<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" v-if="!showResult">
          使用 NTNU 帳號登入
        </h2>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" v-if="showResult">
          {{ data.term }} 期末評鑑填寫結果
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600" v-if="!showResult">
          帳號密碼不會被儲存
        </p>
      </div>

      <div class="flow-root" v-if="showResult">
        <ul class="-mb-8">
          <p class="text-center" v-if="data.courses.length == 0">沒有待填寫的課程評鑑</p>
          <li v-for="(course, idx) in data.courses" :key="course.ct_pk">
            <div class="relative pb-8">
              <span v-if="(idx !== data.courses.length - 1)" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              <div class="relative flex space-x-3">
                <div>
                  <span :class="[course.iconBackground, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white']">
                    <component :is="course.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p class="text-sm text-gray-500">
                      {{ course.name }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="onSubmit" v-if="!showResult">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">學號</label>
            <input :class="[usernameClass]" v-model="form.username" ref="username" id="username" name="username" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:z-10 sm:text-sm" placeholder="學號" />
          </div>
          <div>
            <label for="password" class="sr-only">密碼</label>
            <input :class="[passwordClass]" v-model="form.password" ref="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:z-10 sm:text-sm" placeholder="密碼" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            :class="[buttonClass]"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="buttonDisabled">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" v-if="buttonDisabled">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ buttonLabel }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { CheckIcon, XIcon } from '@heroicons/vue/solid'

export default {
  data() {
    return {
      buttonDisabled: false,
      buttonClass: "",
      usernameClass: "",
      passwordClass: "",
      form: {
        username: "",
        password: ""
      },
      buttonLabel: "",
      showResult: false,
      data: {
        term: "",
        courses: [],
      }
    }
  },
  mounted() {
    this.resetFormStyle();
    this.$refs.username.focus();
  },
  methods: {
    resetFormStyle() {
      this.buttonLabel = "登入"
      this.buttonClass = "bg-indigo-600 hover:bg-indigo-700"
      this.usernameClass = "focus:ring-indigo-500 focus:border-indigo-500"
      this.passwordClass = "focus:ring-indigo-500 focus:border-indigo-500"
    },
    toggleUsername() {
      if (this.usernameClass == "focus:ring-indigo-500 focus:border-indigo-500")
        this.usernameClass = "focus:ring-red-500 focus:border-red-500"
      else
        this.usernameClass = "focus:ring-indigo-500 focus:border-indigo-500"
    },
    togglePassword() {
      if (this.passwordClass == "focus:ring-indigo-500 focus:border-indigo-500")
        this.passwordClass = "focus:ring-red-500 focus:border-red-500"
      else
        this.passwordClass = "focus:ring-indigo-500 focus:border-indigo-500"
    },
    toggleButton() {
      if (this.buttonClass == "bg-indigo-600 hover:bg-indigo-700")
        this.buttonClass = "bg-red-600 hover:bg-red-700"
      else
        this.buttonClass = "bg-indigo-600 hover:bg-indigo-700"
    },
    async onSubmit() {
      this.resetFormStyle()

      if (!/^[a-z0-9]+$/i.test(this.form.username) || this.form.username.length != 9) {
        this.$refs.username.focus()
        this.toggleUsername()
        return
      }

      if (!this.form.password) {
        this.$refs.password.focus()
        this.togglePassword()
        return
      }

      this.buttonDisabled = true
      this.buttonLabel = '處理中'

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.form.username,
          password: this.form.password,
        })
      };

      const endpoint = import.meta.env.PROD ? "https://api.birkhoff.me/v3/ntnu/doFinalSurvey" : "http://localhost:8787/v3/ntnu/doFinalSurvey"
      // const endpoint = "https://api.birkhoff.me/v1/ntnuFinalSurvey"

      const response = await fetch(endpoint, requestOptions)
      const data = await response.json()

      console.log(data)

      if (data?.message === 'Error: time window for acadmSecondQuesSL has passed') {
        this.buttonLabel = '已超過填寫時間'
        this.buttonDisabled = false
        this.toggleButton()
        return
      }

      if (data?.message === 'Invalid username/password pair') {
        this.buttonLabel = '帳號或密碼錯誤'
        this.buttonDisabled = false
        this.$refs.password.focus()
        this.toggleButton()
        return
      }
      
      if (data?.success !== true) {
        this.buttonLabel = '其他錯誤'
        this.buttonDisabled = false
        this.$refs.password.focus()
        this.toggleButton()
        return
      }

      this.data.term = data.data.term
      this.data.courses = data.data.coursesData.map(el => {
        const completed = el.completeFlag === "Y"

        return {
          name: el.courseChn,
          ct_pk: el.ct_pk,
          completed: completed,
          icon: completed ? CheckIcon : XIcon,
          iconBackground: completed ? 'bg-green-500' : 'bg-red-500',
        }
      })

      this.showResult = true
    }
  }
}
</script>
