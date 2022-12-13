<template>
  <div>
    <h4>Contact</h4>
    <div
      class="md:block lg:flex-wrap p-5 relative rounded-md border-2 shadow-lg border-gray-300 dark:border-white"
    >
      <p>Please feel free to send me a message to say hello.</p>
      <p>My email: {{ PROFILE.EMAIL }}</p>

      <div>
        <form
          @submit.prevent="handleSubmit"
          method="POST"
          target="_blank"
          class="md:w-full lg:w-1/2 mx-auto mt-5"
        >
          <label class="field-label">Name</label>
          <input
            class="field-input"
            type="text"
            placeholder="Your name"
            id="name"
            v-model="form.name"
            required
          />
          <label class="field-label">Email</label>
          <input
            class="field-input"
            type="email"
            placeholder="Email"
            id="email"
            v-model="form.email"
            required
          />
          <label class="field-label">Message</label>
          <textarea
            class="field-input"
            id="message"
            cols="30"
            rows="5"
            placeholder="Message"
            v-model="form.message"
            required
          >
          </textarea>

          <input
            class="btn-primary mt-5"
            type="submit"
            value="Send a Message"
          />
        </form>

        <span v-if="error">
          Sorry, an unexpected error happened, please try again later</span
        >
        <span v-else>
          <div v-if="submitted" class="text-center mt-10">
            <h2 class="text-2xl">Thanks you!</h2>
            <div class="text-md">We'll be in touch soon.</div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { PROFILE } from "@/data/data";
import { reactive } from "vue";
import UseEmail from "./UseEmail";

export default {
  data() {
    return {
      PROFILE: Object.freeze(PROFILE),
    };
  },
  setup() {
    const form = reactive({
      name: "",
      email: "",
      message: "",
    });
    const endpointUrl = process.env.VUE_APP_EMAIL_PROVIDER;

    const { loading, submitted, error, sendEmail } = UseEmail(endpointUrl);

    return { form, loading, submitted, error, sendEmail };
  },

  methods: {
    handleSubmit() {
      this.sendEmail({
        name: this.form.name,
        email: this.form.email,
        message: this.form.message,
        time: new Date().toISOString(),
      });
      setTimeout(() => {
        this.submitted = true;
      }, 100);
    },
  },
};
</script>
