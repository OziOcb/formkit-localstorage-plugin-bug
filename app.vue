<script setup>
const submitHandler = async function () {
  await new Promise((r) => setTimeout(r, 2000));
  window.location.reload();
};
</script>

<template>
  <!-- NOTE: Using <ClientOnly> is a temporary solution to the know FormKit's bug - https://github.com/formkit/formkit/issues/720 -->
  <ClientOnly>
    <FormKit
      type="form"
      name="contact"
      use-local-storage
      @submit="submitHandler"
    >
      <FormKit
        type="text"
        name="name"
        label="Your name"
      />
      <FormKit
        type="datepicker"
        name="birthday"
        label="Birthday"
      />
    </FormKit>
  </ClientOnly>
</template>