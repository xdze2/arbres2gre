console.log('hello !');

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods: {
    showinfo: function ( sciname ) {
        this.message = sciname;
        console.log('show ' + sciname);

        this.searchquery( sciname )
    },
    searchquery: function ( texttosearch ) {
        var config = {
          headers: { 'crossDomain': true, 'origin':'*' },
        };

        // axios.get('https://fr.wikipedia.org/w/api.php', {
        //     action:'opensearch',
        //     search: texttosearch,
        //     namespace: "0",
        //     format: 'jsonfm',
        //     limit: 5
        // }, config)
        var data = {
            action:'opensearch',
            search: texttosearch,
            namespace: "0",
            format: 'jsonfm',
            limit: 5
        };
        var url = 'https://fr.wikipedia.org/w/api.php';
        fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json", "Origin":'*',
        },
          mode: 'no-cors'
        }).then(function(response) {
          response.status     //=> number 100–599
          response.statusText //=> String
          response.headers    //=> Headers
          response.url        //=> String

          return response.text()
        }, function(error) {
          error.message
          console.log(error);
        })

    }
 }
})
