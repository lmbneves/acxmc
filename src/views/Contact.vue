<template>
  <div class="contact-page">
    <div class="column"> 
      <form class="form">
        <div class="form__input form__name">
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
          >
        </div>
        <div class="form__input form__email">
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
          >
        </div>
        <label>Message</label>
        <textarea 
          name="message"
          class="form__input"
          v-model="message"
          cols="30" rows="5"
        >
        </textarea>
        
        <input type="submit" value="Send">
      </form>
    </div>
    <div class="column">
      <div class="block">
        <h1 class="connect">
          <p>GET<br/>IN<br/>TOUCH</p>
        </h1>
      </div>
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

  display: flex;
  flex-direction: row;
  align-items: stretch;

  label {
    font-family: 'Archivo Black';
    text-transform: uppercase;
  }

  input, textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid $timberwolf;
    padding: 1rem 0 0.5rem;
    color: #fff;
    font-size: 1.5rem;
    border-radius: 0;
    outline: none;
    font-family: 'PGF Now Regular', sans-serif;
    margin-bottom: 60px;
    width: 80%;
    text-align: left;
  }

  input[type="submit"] {
    background-color: $coral;
    width: 100px;
  }
}

.column {
  flex: 50%;
  overflow-y: scroll;
  margin-top: 80px;
}

.form {
  margin: 40px 0px 0px 80px;
}

.block {
  background-color: $coral;
  margin-right: 40px;
  height: 100%;
}

.connect {
  color: white;
  font-family: 'Archivo Black';
  text-transform: uppercase;
  margin-right: -12px;
  margin-top: -12px;
  text-align: right;
}

@media only screen and (min-width: 768px) {
  .connect {
    font-size: 110pt;
    line-height: 90pt;
  }
}

</style>