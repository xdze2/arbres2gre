console.log('hello !');

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    data:''
  },
  methods: {
    askinfo: function ( sciname ) {
        /* first method called when click on 'arbre' node */
        this.message = sciname;
        console.log('show ' + sciname);

        var res = this.searchquery( sciname )

    },
    showinfo: function( response ){
        /* method called  */
        this.data = response.data;
    },
    searchquery: function ( texttosearch ) {
        var _this = this;
        axios.get('https://fr.wikipedia.org/w/api.php', {
            params:{
                origin:'*',
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
    }

 }
})
