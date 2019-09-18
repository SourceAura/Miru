<template>
  <div>
      <h3>
      Recent: 
    </h3>
    <vs-tabs alignment="center">
      <vs-tab label="1 Day Ago">
        <div id="first">
      <h2>{{previousCurrency.yesterday.DATE}}</h2>
      <p><label>BTC:&nbsp;</label>{{previousCurrency.yesterday.BTC}}</p>
      <p><label>ETH:&nbsp;</label>{{previousCurrency.yesterday.ETH}}</p>
      <p><label>LTC:&nbsp;</label>{{previousCurrency.yesterday.LTC}}</p>
    </div>
      </vs-tab>
      <vs-tab label="2 Days Ago">
        <div id="second">
      <h2>Date: &nbsp; {{previousCurrency.twoDays.DATE}}</h2>
      <p><label>BTC:&nbsp;</label>{{previousCurrency.twoDays.BTC}}</p>
      <p><label>ETH:&nbsp;</label>{{previousCurrency.twoDays.ETH}}</p>
      <p><label>LTC:&nbsp;</label>{{previousCurrency.twoDays.LTC}}</p>
    </div>
      </vs-tab>
      <vs-tab label="3 Days Ago">
        <div id="third">
      <h2>Date: &nbsp; {{previousCurrency.threeDays.DATE}}</h2>
      <p><label>BTC:&nbsp;</label>{{previousCurrency.threeDays.BTC}}</p>
      <p><label>ETH:&nbsp;</label>{{previousCurrency.threeDays.ETH}}</p>
      <p><label>LTC:&nbsp;</label>{{previousCurrency.threeDays.LTC}}</p>
    </div>
      </vs-tab>
      <vs-tab label="4 Days Ago">
        <div id="fourth">
      <h2>Date: &nbsp; {{previousCurrency.fourDays.DATE}}</h2>
      <p><label>BTC:&nbsp;</label>{{previousCurrency.fourDays.BTC}}</p>
      <p><label>ETH:&nbsp;</label>{{previousCurrency.fourDays.ETH}}</p>
      <p><label>LTC:&nbsp;</label>{{previousCurrency.fourDays.LTC}}</p>
    </div>
      </vs-tab>
      <vs-tab label="5 Days Ago">
        <div id="fifth">
      <h2>Date: &nbsp; {{previousCurrency.fiveDays.DATE}}</h2>
      <p><label>BTC:&nbsp;</label>{{previousCurrency.fiveDays.BTC}}</p>
      <p><label>ETH:&nbsp;</label>{{previousCurrency.fiveDays.ETH}}</p>
      <p><label>LTC:&nbsp;</label>{{previousCurrency.fiveDays.LTC}}</p>
    </div>
      </vs-tab>
    </vs-tabs>


    <!-- <h2>Previous prices of coins</h2>
    <div id="first">
      <h2>Date: &nbsp; {{previousCurrency.yesterday.DATE}}</h2>
      <p><label>1 BTC:&nbsp;</label>{{previousCurrency.yesterday.BTC}}</p>
      <p><label>1 ETH:&nbsp;</label>{{previousCurrency.yesterday.ETH}}</p>
      <p><label>1 LTC:&nbsp;</label>{{previousCurrency.yesterday.LTC}}</p>
    </div>
    <div id="second">
      <h2>Date: &nbsp; {{previousCurrency.twoDays.DATE}}</h2>
      <p><label>1 BTC:&nbsp;</label>{{previousCurrency.twoDays.BTC}}</p>
      <p><label>1 ETH:&nbsp;</label>{{previousCurrency.twoDays.ETH}}</p>
      <p><label>1 LTC:&nbsp;</label>{{previousCurrency.twoDays.LTC}}</p>
    </div>
    <div id="third">
      <h2>Date: &nbsp; {{previousCurrency.threeDays.DATE}}</h2>
      <p><label>1 BTC:&nbsp;</label>{{previousCurrency.threeDays.BTC}}</p>
      <p><label>1 ETH:&nbsp;</label>{{previousCurrency.threeDays.ETH}}</p>
      <p><label>1 LTC:&nbsp;</label>{{previousCurrency.threeDays.LTC}}</p>
    </div>
    <div id="fourth">
      <h2>Date: &nbsp; {{previousCurrency.fourDays.DATE}}</h2>
      <p><label>1 BTC:&nbsp;</label>{{previousCurrency.fourDays.BTC}}</p>
      <p><label>1 ETH:&nbsp;</label>{{previousCurrency.fourDays.ETH}}</p>
      <p><label>1 LTC:&nbsp;</label>{{previousCurrency.fourDays.LTC}}</p>
    </div>
    <div id="fifth">
      <h2>Date: &nbsp; {{previousCurrency.fiveDays.DATE}}</h2>
      <p><label>1 BTC:&nbsp;</label>{{previousCurrency.fiveDays.BTC}}</p>
      <p><label>1 ETH:&nbsp;</label>{{previousCurrency.fiveDays.ETH}}</p>
      <p><label>1 LTC:&nbsp;</label>{{previousCurrency.fiveDays.LTC}}</p>
    </div> -->

  </div>
</template>

<script>
export default {
  name: 'app',
  props: {
    previousCurrency: { type: Object }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
#first, #second, #third, #fourth, #fifth {
  border: 1px solid #628;
  border-radius: 7px;
  padding: 2em 0em;
  max-width: 90%;
  margin: 3px auto;
}
#first p, #second p, #third p, #fourth p, #fifth p {
  display: inline-block;
  padding: 0em 1.5em;
  font-size: 1.5rem;
}
h2 { font-size: 1.5em; }
</style>
