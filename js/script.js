
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');// The $ doesn't mean anything , just a sign to indicated jQuery object
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var $street = $('#street').val();
    var $city =$('#city').val();
    var $address = $street +','+ $city

    var url = 'https://maps.googleapis.com/maps/api/streetview?'+
         'size=1200x600&location='+$street+','+$city+'&heading=151.78&pitch=-0.76&key=AIzaSyAL2vf_FAQiiBAYQwbwoDdD_csv7Liq6qQ';

    //var googlemap= jQuery.ajax(url)

    var img ='<img class ="bgimg" src="'+url+'" alt="">';

    $('body').append(img);



        // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        
        url += '?' + $.param({
          'api-key': "054c2320550f4339aafac00bc0a138dd",
          'fq': $city
        });
        $.getJSON({
          url: url,
          method: 'GET',}).done(function(result) {

              var nytResponse = result.response.docs;

              console.log(nytResponse);

              content ="";
              var articleUrl;
              nytResponse.forEach(function(e){

                 articleUrl= '<a href="'+e.web_url +'">'+e.headline.main+'</a>'

                        content = content+"<li >"+ articleUrl+ 

                           " <p class='article-list'> "+e.snippet +"</p>"+



                              "</li>";

                      } );

             $("#nytimes-articles").append(content);


        }).fail(function(err) {
          throw err;
        });
               


    
      

    //google streetmap key = AIzaSyAL2vf_FAQiiBAYQwbwoDdD_csv7Liq6qQ
    // nytimes api key =054c2320550f4339aafac00bc0a138dd

    return false;
};

$('#form-container').submit(loadData);
