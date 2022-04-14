<template>
  <div class="contact-page">
    <div class="contact-image"></div>
    <div class="contact-content"> 
      <div class="title">
        <h2>Connect</h2>
      </div>
      <form class="connect__form">
        <div class="container">
          <div class="row">
            <div class="six columns">
              <input placeholder="Name" />
            </div>
            <div class="six columns">
              <input placeholder="Email" />
            </div>
          </div>
          <div class="row">
            <div class="twelve columns">
              <textarea placeholder="Message" />
            </div>
          </div>
          <div class="row submit">
            <div class="one column">
              <button>
                Connect with me
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: function () {
    return {
      //
    }
  },
  methods: {
    
  }
}
</script>


<style lang="scss" scoped>
.contact-page {
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: absolute;

  input, textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    padding: 1rem 0 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 0;
    outline: none;
    width: 100%;
    font-family: 'Questrial';
  }

  textarea {
    height: 150px;
  }
}

.contact-image {
  height: 100vh;
  width: 40%;
  margin-bottom: 60px;

  background-image: url('~@/assets/images/abby-connect.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 50%;
  background-position: top 30% left;
}

.contact-content {
  flex: 1;
  overflow-y: scroll;
}

.title {
  margin: 0 auto;
  text-align: center;
}

.connect__form {
  max-width: 640px;
  margin: 0 auto;
}

.submit {
  float: right;
}
</style>