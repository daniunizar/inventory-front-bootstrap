<template>
  <!-- BEGIN: Modal Content -->
  <Modal :show="isActive" @hidden="isActive = false">
    <ModalBody class="border border-red-500 p-0">
      <div class="p-5 text-center">
        <CheckCircleIcon class="w-16 h-16 text-success mx-auto mt-3" />
        <div class="text-slate-500 mt-2 text-2xl">
          {{ message }}
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button type="button" @click="toggleModal" class="border bg-green-400">
          Ok
        </button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Modal Content -->
</template>
<script>
export default {
  components: {
    //
  },
  data() {
    return {
      // Modal control
      isActive: false,
    };
  },
  props: {
    successModalPreview: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: '',
    }
  },
  watch: {
    successModalPreview: function (newValue) {
      this.isActive = newValue;
    },
  },
  methods: {
    toggleModal: function () {
      this.isActive = !this.successModalPreview;
      this.$emit('closeModal');
    },
  },
}
</script>