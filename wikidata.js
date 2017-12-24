console.log('hello !');

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    data:''
  },
  methods: {
    askinfo: function ( sciname ) {
        this.message = sciname;
        console.log('show ' + sciname);

        var res = this.searchquery( sciname )

    },
    showinfo: function( response ){
        this.data = response.data;
    },
    searchquery: function ( texttosearch ) {
        var _this = this;
        axios.get('https://fr.wikipedia.org/w/api.php?origin=*', {
            params:{
                action:'opensearch',
                search: texttosearch,
                namespace: "0",
                format: 'json',
                limit: 5}
        }).then(function (response) {
            // console.log(response);
            _this.showinfo( response );
          })
          .catch(function (error) {
              console.log('request error');
            console.log(error);
          });

        // var data = {
        //     action:'opensearch',
        //     search: texttosearch,
        //     format: 'json',
        //     limit: 5
        //     };
        // var url = 'https://fr.wikipedia.org/w/api.php?origin=*';
        // fetch(url, {
        //   method: "POST",
        //   // body: JSON.stringify(data),
        //   body: 'action=opensearch&search=Eisntein',
        //   headers: {
        //     "Content-Type": "application/json",
        // },
        //  mode: 'cors'
        // }).then(function(response) {
        //   // response.status     //=> number 100–599
        //   // response.statusText //=> String
        //   // response.headers    //=> Headers
        //   // response.url        //=> String
        //   console.log(response);
        //
        //
        //   return response.text()
        //
        // }, function(error) {
        //     console.log('error');
        //   error.message
        //   console.log(error);
        // })

    }
 }
})
