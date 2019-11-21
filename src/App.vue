<template>
  <div id="app">

    <div class="form-group">
      <label>
        <input type="text" class="form-control" v-model="user.username">
      </label>
    </div>

    <div class="form-group">
      <label>
        <input type="text" class="form-control" v-model="user.email">
      </label>
    </div>

    <div class="form-group">
      <label> Get the node
        <input type="text" class="form-control" v-model="node">
      </label>
    </div>

    <button class="btn btn-primary" v-on:click="submit">SUBMIT</button>
    <hr>
    <button class="btn-dark" @click="fetchData">GET DATA</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" :key="user.id">{{ user.username }} | {{ user.email }}</li>
    </ul>

  </div>
</template>

<script>

export default {
  name: 'app',

  components: {

  },

  data: () => ({
    user: {
      username: '',
      email: '',
    },

    users: [],
    resource: {},
    node: 'data'

  }),

  methods: {
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET', }
      };

      this.resource = this.$resource('{node}.json', {}, customActions);
    },

    submit() {
      // this.$http.post('https://vuejs-https-bdc63.firebaseio.com/data.json', this.user)
      //         .then((response)=> {
      //           // eslint-disable-next-line no-console
      //           console.log(response);
      //         }, (error)=> {
      //           // eslint-disable-next-line no-console
      //           console.error(error);
      //         }); // send data to firebase. .json required
      // // eslint-disable-next-line no-console
      // console.log('Submitted!' + this.user)
      //this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);

    },

    fetchData() {
      // this.$http.get('data.json')
      //         .then( (response)=> {
      //           return response.json(); // from vue-resource, gives back a promise
      //         }).
      //         then((data)=> {
      //   // eslint-disable-next-line no-console
      //           console.log(data); // Promise object extracted
      //           const resultsArray = [];
      //           for (let key in data) {
      //             resultsArray.push(data[key]);
      //           }
      //           this.users = resultsArray;
      //   // eslint-disable-next-line no-console
      //           console.log(this.users);
      // });

      this.resource.getData({node: this.node})
              .then();
    },

  },


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
