<template>
  <div>
    <!-- <h2>Current prices of coins</h2>
    <div id="btc" class="currency">
      <label>1 BTC</label>
      <p>${{currentCurrency.BTC}}</p>
    </div>
    <div id="eth"class="currency">
      <label>1 ETH</label>
      <p>${{currentCurrency.ETH}}</p>
    </div>
    <div id="ltc"class="currency">
      <label>1 LTC</label>
      <p>${{currentCurrency.LTC}}</p>
    </div> -->


    <h3>
      Current:
    </h3>
    <vs-tabs alignment="center">
      <vs-tab label="BTC">
        <div>
            <p>${{currentCurrency.BTC}}</p>
        </div>
      </vs-tab>

      <vs-tab label="ETH">
        <div>
            <p>${{currentCurrency.ETH}}</p>
        </div>
      </vs-tab>

      <vs-tab label="LTC">
        <div>
            <p>${{currentCurrency.LTC}}</p>
        </div>
      </vs-tab>
      
    </vs-tabs>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    currentCurrency: { type: Object }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
/* .currency {
  border: 1px solid #F5CE00;
  border-radius: 15px;
  padding: 2em 0em;
  display: inline-block;
  width: 30%;
} */
div p {
  font-size: 2rem;
}
/* h2 {
   font-size: 1.5em;
} */
</style>
