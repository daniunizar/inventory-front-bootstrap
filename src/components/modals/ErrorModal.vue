<template>
  <!-- BEGIN: Modal Content -->
  <Modal :show="isActive" @hidden="isActive = false">
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 text-warning mx-auto mt-3" />
        <div class="text-slate-500 mt-2 text-2xl">
          {{ message }}
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button type="button" @click="toggleModal" class="btn btn-primary w-24">
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
    warningModalPreview: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: '',
    }
  },
  watch: {
    warningModalPreview: function (newValue) {
      this.isActive = newValue;
    },
  },
  methods: {
    toggleModal: function () {
      this.isActive = !this.warningModalPreview;
      this.$emit('closeModal');
    },
  },
}
</script>