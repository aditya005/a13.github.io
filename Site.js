$(document).ready(function(){

    var randomIndex = Math.floor(Math.random() * Names.length);

    var randomElement = Names[randomIndex];
    
    $("#Index").text(randomElement.Index);
    $("#Name").text(randomElement.Name);
    $("#Meaning").text(randomElement.Meaning);
    
    var result = Slokas.filter(function (obj) {
        return obj.Index === randomElement.SlokaIndex;
    });
    if (result.length > 0) {
        var Sloka = result[0];
        $("#Sloka-Sanskrit").html(Sloka.Sanskrit);
        $("#Sloka-English").html(Sloka.English);
    }
    
    
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    
    gtag('config', 'G-1QRMZ8KB8K');

});