<template>
  <div>
    <v-container>
      <v-row>
        <v-col lg="6" xl="6" md="6" sm="12">
          <v-jsoneditor
            v-model="json"
            :options="options"
            :plus="true"
            height="100%"
            @error="onError"
            @input="error = false"
          />
        </v-col>
        <v-col lg="6" xl="6" md="6" sm="12" tile outlined>
          <FormulateForm
            v-on:submit="handleform"
            :schema="json"
            v-if="Object.keys(json).length && !error"
          >
          </FormulateForm>
          <p v-else>Please start creating template</p>
          <v-btn raised plain outlined elevation="2" class="mt-1"
            ><a :href="url" download="schema.json" class="download-btn"
              >Download Schema <v-icon small>mdi-download</v-icon></a
            ></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
@import "@/scss/main.scss";
.download-btn {
  text-decoration: none;
  color: rgb(61, 58, 58);
}
</style>
<script>
export default {
  data() {
    return {
      error: false,
      form: {},
      json: [
        {
          component: "h3",
          children: "Student registration",
        },
        {
          label: "Your name",
          name: "name",
          validation: "required",
        },
        {
          label: "Your email",
          name: "email",
          help: "Please use your student email address",
          validation: "bail|required|email|ends_with:.edu",
          "validation-messages": {
            ends_with: "Please use a .edu email address",
          },
        },
        {
          label: "Student ID",
          name: "student_id",
          help: "Your 6 digit student ID (ex. ST-123421)",
          placeholder: "ST-",
          validation: "^required|matches:/^ST-[\\d]{6}$/",
          "validation-name": "Student ID",
        },
        {
          type: "submit",
        },
      ],
      options: {
        mode: "code",
      },
    };
  },
  methods: {
    handleform(form) {
      console.log(form);
    },
    onError(e) {
      this.error = true;
      console.log(e);
    },
  },
  computed: {
    url() {
      return `data:text/plain,${encodeURIComponent(
        JSON.stringify(this.json, null, 2)
      )}`;
    },
  },
};
</script>
