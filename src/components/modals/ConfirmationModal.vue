<template>

  <Modal :show="isActive" @hidden="closeModal()">
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <AlertTriangleIcon class="w-16 h-16 text-warning mx-auto mt-3" />
        <div class="text-3xl mt-5">{{ message }}</div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button type="button" @click="closeModal()" class="btn btn-outline-secondary w-24 mr-1">
          {{ btnCancelLabel }}
        </button>
        <button type="button" @click="acceptRequest()" class="btn btn-warning w-24">
          {{ btnAcceptLabel }}
        </button>
      </div>
    </ModalBody>
  </Modal>

</template>

<script>
  export default {
    setup() {
      //
    },
    components: {
      //
    },
    data() {
      return {
        isActive: false,
      };
    },
    props: {
      modalPreview: {
        type: Boolean,
        default: false
      },
      message: {
        type: String,
        default: ''
      },
      btnAcceptLabel: {
        type: String,
        default: 'Aceptar'
      },
      btnCancelLabel: {
        type: String,
        default: 'Cancelar'
      },
    },
    watch: {
      modalPreview: function (newValue) {
        this.isActive = newValue;
      },
    },
    methods: {
      acceptRequest() {
        this.$emit('acceptRequest');
        this.closeModal();
      },
      closeModal() {
        this.isActive = false;
        this.$emit('closeModal');
      }
    },
    mounted() {
      //
    },
    created() {
      //
    },
  }
</script>