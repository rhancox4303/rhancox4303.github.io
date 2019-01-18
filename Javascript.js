/**
 Name:       Riley Hancox
 Student ID: 000397119
 Project:    Hamilton Places of Worship -Release
 Course:     COMP 10133
 Instructor: Kevin Browne
 
 File:       Javascript.js
 CSunix:     https://csunix.mohawkcollege.ca/~000397119/private/10133/release/Javascript.js
 
 I, Riley Hancox, 000397119 certify that this material is my original work. No other
 person's work has been used without due acknowledgement.
 **/

/* global pow */

$(document).ready(function () {
    /**
     * The variable markerArray represents an Array that will hold 
     * the markers that are currently displayed on the map
     * 
     * @type Array
     */
    var markerArray = [];

    /**
     * The variable map is used to represent the map
     * created by the Google Maps API
     * 
     * @type Map
     */
    var map;

    /**
     * The variable selectedFilter represents the religious filter that the user
     *  has selected
     * 
     * @type String 
     */
    var selectedFilter;

    /**
     * The variable community represents which community has chosen to have the
     * search be in.
     * 
     * @type String 
     */
    var community;

    /**
     * The RenderMap function creates a new Google Maps API and centers it on
     * Hamilton.
     * 
     * @returns {None} 
     */
    function RenderMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 43.2554, lng: -79.8732},
            zoom: 10
        });
    }

    /**
     * The SelectBody function is used to have a second select appear with 
     * custom options if specfic religious bodies are selected.
     * 
     * @returns {None} 
     */
    function SelectBody() {
        $('#RD').find('option').remove(); //Previous options are removed
        if ($("#RB").val() === "CW") {
            $('#RD').append('<option value="Alliance" selected> Alliance</option>');
            $('#RD').append('<option value="Anglican">Anglican</option>');
            $('#RD').append('<option value="Apostolic">Apostolic</option>');
            $('#RD').append('<option value="Associated Gospel Churches">Associated Gospel</option>');
            $('#RD').append('<option value="Baptist">Baptist</option>');
            $('#RD').append('<option value="Christadelphian">Christadelphian</option>');
            $('#RD').append('<option value="Christian Reformed">Christian Reformed</option>');
            $('#RD').append('<option value="Church of Jesus Christ">Church of Jesus Christ</option>');
            $('#RD').append('<option value="Church of the Nazarene">Church of the Nazarene</option>');
            $('#RD').append('<option value="Community Church">Community Church</option>');
            $('#RD').append('<option value="Free Methodist">Free Methodist</option>');
            $('#RD').append('<option value="Full Gospel">Full Gospel</option>');
            $('#RD').append('<option value="Jehovah\'s Witnesses">Jehovah\'s Witnesses</option>');
            $('#RD').append('<option value="Jesus Christ of Latter-Day Saints">Jesus Christ of Latter-Day Saints</option>');
            $('#RD').append('<option value="Lutheran">Lutheran</option>');
            $('#RD').append('<option value="Mennonite Brethren">Mennonite Brethren</option>');
            $('#RD').append('<option value="Methodist Episcopal">Methodist Episcopal</option>');
            $('#RD').append('<option value="Pentecostal">Pentecostal</option>');
            $('#RD').append('<option value="Pentecostal Assemblies of Canada">Pentecostal Assemblies of Canada</option>');
            $('#RD').append('<option value="Presbyterian">Presbyterian</option>');
            $('#RD').append('<option value="Redeemed Christian Church of God">Redeemed Christian Church of God</option>');
            $('#RD').append('<option value="Reformed">Reformed</option>');
            $('#RD').append('<option value="Religious Society of Friends">Religious Society of Friends</option>');
            $('#RD').append('<option value="Reorganized Church of Jesus Christ of Latter Day Saints">Reorganized Church Of Jesus Christ Of Latter Day Saints</option>');
            $('#RD').append('<option value="Roman Catholic">Roman Catholic</option>');
            $('#RD').append('<option value="Salvation Army">Salvation Army</option>');
            $('#RD').append('<option value="Seventh Day Adventist">Seventh Day Adventist</option>');
            $('#RD').append('<option value="Seventh Day Adventist Reformed">Seventh Day Adventist Reformed</option>');
            $('#RD').append('<option value="Ukranian Catholic">Ukrainian Catholic</option>');
            $('#RD').append('<option value="United">United</option>');
            $('#RD').append('<option value="United Reformed">United Reformed</option>');
            $('#RD').append('<option value="Unity">Unity</option>');
            //The second select field and label are shown
            $('#RD').show();
            $('#RD-Label').show();
        } else if ($("#RB").val() === "CE") {
            $('#RD').append('<option value="Greek Orthodox" selected>Greek Orthodox</option>');
            $('#RD').append('<option value="Orthodox">Orthodox</option>');
            $('#RD').append('<option value="Romanian Orthodox">Romanian Orthodox</option>');
            $('#RD').append('<option value="Slovak">Slovak</option>');
            $('#RD').append('<option value="Ukrainian Orthodox">Ukrainian Orthodox</option>');
            //The second select field and label are shown
            $('#RD').show();
            $('#RD-Label').show();
        } else if ($("#RB").val() === "JE") {
            $('#RD').append('<option value="ADAS ISRAEL" selected>ADAS ISRAEL</option>');
            $('#RD').append('<option value="Jewish">Jewish</option>');
            $('#RD').append('<option value="Jewish (Conservative)">Jewish (Conservative)</option>');
            $('#RD').append('<option value="Jewish (Orthodox)">Jewish (Orthodox)</option>');
            //The second select field and label are shown
            $('#RD').show();
            $('#RD-Label').show();
        } else {
            //The select field and label are hidden if a non-suitable body is selected.            
            $('#RD').hide();
            $('#RD-Label').hide();
        }
    }

    /**
     * The Function GetFilter is used to select the Users filter options based
     * on the values of the Community and RB field's value. If certain RB fields are 
     * chosen than the RD select field's value is used.
     * 
     * The DrawMarkers function is then called with the User's filters passed in.
     * 
     * @returns {None} 
     */
    function GetFilter() {
        community = $('#Community').val();
        if (($("#RB").val() === "CW") || ($("#RB").val() === "CE") || ($("#RB").val() === "JE")) {
            selectedFilter = $('#RD').val();
        } else {
            selectedFilter = $('#RB').val();
        }
        DrawMarkers(selectedFilter, community);
    }

    /**
     * The DrawMarkers Function draws the Markers on the Google Map represented
     * by the map variable.
     * 
     * @param {String} filter 
     * filter represents the user's selected filter.
     * 
     * @param {String} community
     * community represents the user's selected community filter.
     * 
     * @returns {None}   
     */
    function DrawMarkers(filter, community) {
        $('#Results').remove();

        /**
         * The counter variable is used to count the number of results found
         * by the filter
         * 
         * @type Number
         */
        var counter = 0;
        RemoveMarkers();
        /*
         * A for loop is used to loop through each place of worship in pow.
         * All valid places of worship are drawn on the map.
         */
        for (var x = 0; x < pow.length; x++) {
            if ((filter === pow[x].DENOMINATION || filter === 'All') && (community === pow[x].COMMUNITY || community === 'All')) {
                counter++;
                var myLatLng = {lat: pow[x].LATITUDE, lng: pow[x].LONGITUDE};
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: pow[x].NAME
                });

                //The AddEventListener function is called
                AddEventListener(marker, pow[x].ID);

                //The marker is pushed onto the markerArray
                markerArray.push(marker);
            }
        }

        //The number of found results are displayed
        $('#Left-Top-Panel').append('<p id="Results">' + counter + ' results found </p>');
    }

    /**
     * The RemoveMarkers function loops through the marker array and removes
     * them from the map.
     * 
     * @returns {None} 
     */
    function RemoveMarkers() {
        for (var i = 0; i < markerArray.length; i++) {
            markerArray[i].setMap(null);
        }

    }

    /**
     * The AddEventListener function adds an event listener to each marker that
     * is added to the map. The event listener will allow the user to click on 
     * the markers and have information displayed in the side panel.
     * 
     * @param {Marker} marker represents the marker that the will have the
     * listner added to it.
     * @param {Number} ID represents the ID of the pow that the marker represents.
     * 
     * @returns {None}
     */
    function AddEventListener(marker, ID) {

        /**
         * The variable place represents the place of worship that the marker
         * reprsents.
         * 
         * @type JSON Place of Worship
         */
        var place;

        //A for loop is used to determine which pow element the marker represents
        for (var x = 0; x < pow.length; x++) {
            if (pow[x].ID === ID) {
                place = pow[x];
                break;
            }
        }

        /**
         * The variable address represents the address concated with the community
         * 
         * @type String
         */
        var address = place.ADDRESS + ', ' + place.COMMUNITY;

        //FormatAddress is called with address passed as a parameter.     
        address = FormatAddress(address);

        /*
         * An listener is added that activates a function that displays information
         * on the place of worship, 2 buttons, one that returns to the locater menu
         * and one that links to Google map directions.
         */
        marker.addListener('click', function () {
            var googleLink = "https://www.google.com/maps/search/?api=1&query=" + place.ADDRESS + ',' + place.COMMUNITY;
            $('#Left-Top-Panel').hide();
            $('#Left-Bottom-Panel').empty();
            $('#Left-Bottom-Panel').show();
            $('#Left-Bottom-Panel').append('<h4>' + place.NAME + '</h4>');
            $('#Left-Bottom-Panel').append('<p><i>' + place.DENOMINATION + '</i><p>');
            $('#Left-Bottom-Panel').append('<p>' + address + '<p>');

            if (place.WEBSITE !== 'None') {
                $('#Left-Bottom-Panel').append('<p><a class="btn btn-primary btn-sm btn-block" target="_blank" href="' + place.WEBSITE + '"> Website </a></p>');
            } else {
                $('#Left-Bottom-Panel').append('<p><a class="btn btn-primary btn-sm btn-block disabled" target="_blank"> No Website Available </a></p>');
            }

            $('#Left-Bottom-Panel').append('<p><a class="btn btn-primary btn-block btn-sm" target="_blank" href="' + googleLink + '">Get Directions</a></p>');
            $('#Left-Bottom-Panel').append('<button id="Return-Button" type="button" class="btn btn-primary btn-sm btn-block">Return to Locater</button>');

            $('#Return-Button').click(ReturnToLocater);
        });
    }

    /**
     * The ReturnToLocater function empties the Left-Bottom-Panel div and shows
     * the Left-Top-Panel div.
     * 
     * @returns {None} 
     */
    function ReturnToLocater() {
        $('#Left-Bottom-Panel').hide();
        $('#Left-Bottom-Panel').empty();
        $('#Left-Top-Panel').show();
    }

    /**
     * The FormatAddress function formats the address from Uppercase letters to
     * proper case formating 
     * 
     *@param {String} string represents the string that will be formatted  
     */
    function FormatAddress(string)
    {
        return string.replace(/\w\S*/g,
                function (string) {
                    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
                });
    }
 
   $('#Left-Bottom-Panel').hide();
    //The RenderMap function is called.
    RenderMap();
    
    $('#RB').change(SelectBody);
    $('#Locate-Button').click(GetFilter);
});

