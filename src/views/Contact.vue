<template>
  <div class="contact-page">
    <div class="column" style="margin-top: 80px;">
      <div class="block">
        <h1 class="connect">
          <p>GET<br/>IN<br/>TOUCH</p>
        </h1>
      </div>
    </div>
    <div class="column"> 
     <div class="contact-details">
      <h4>EMAIL</h4>
      <p>abagael.cheng@gmail.com</p>
      <h4>INSTAGRAM</h4>
      <p>@abagaelcheng</p>
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
}
.column {
  flex: 100%;
  overflow-y: scroll;
}
.block {
  background-color: $coral;
  margin-right: 40px;
  height: 100%;
  min-height: 200px;
}
.connect {
  color: white;
  font-family: 'Archivo Black';
  text-transform: uppercase;
  margin-right: -4px;
  margin-top: -14px;
  text-align: right;
  font-size: 42pt;
}
.contact-details {
  margin: 40px 20px;

  h4 {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 12pt;
  }
  p {
    font-size: 16pt;
    margin-bottom: 60px;
  }
}

@media only screen and (min-width: 768px) {
  .contact-page {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  .column {
    flex: 50%;
    overflow-y: scroll;
    margin-top: 80px;
  }
  .connect {
    font-size: 110pt;
    line-height: 90pt;
    margin-right: -12px;
    margin-top: -12px;
  }
  .contact-details {
    margin: 40px 0px;
  }
}

</style>