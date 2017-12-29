console.log('hello !');

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    datainfo:'',
    abstract:''
  },
  methods: {
    askinfo: function ( sciname ) {
        /* first method called when click on 'arbre' node */
        this.message = sciname;
        console.log('show ' + sciname);

        var res = this.searchquery( sciname )

    },
    showinfo: function( response ){

        /* method called ..  */
        var data = JSON.parse( response.request.response );
        console.log(data);
        this.datainfo = data.query.pages;

        var pageinfo =  data.query.pages;
        pageinfo = pageinfo[ pageinfo.keys()[0] ];

        this.abstract = pageinfo['extract'];
        // this.abstract = 'hello';
    },
    searchquery: function ( texttosearch ) {
        var _this = this;
        axios.get('https://fr.wikipedia.org/w/api.php', {
            params:{
                origin:'*',
                action:'opensearch',
                search: texttosearch,
                format: 'json',
                limit: 5}
        }).then(function (response) {
            // console.log(response);
            // _this.showinfo( response );
            _this.pagequery( response.data[1][0] );
        })
        .catch(function (error) {
            console.log('search request error');
            console.log(error);
        });
    },
    pagequery: function ( title ) {
        var _this = this;
        axios.get('https://fr.wikipedia.org/w/api.php', {
            params:{
                origin:'*',
                action:'query',
                titles: title.replace(' ', '_'),
                format: 'json',
                prop:'info|extracts|pageimages',
                //exchars:500,
                //exsectionformat:'plain',
                //explaintext:'true'
                }
        }).then(function (response) {
            // console.log(response);
            console.log('get response');
            _this.showinfo( response );
        })
        .catch(function (error) {
            console.log('page request error');
            console.log(error);
        });
    }

 }
})
