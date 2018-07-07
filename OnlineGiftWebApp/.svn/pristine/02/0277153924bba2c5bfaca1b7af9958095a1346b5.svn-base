export class LocationHelper {
    static prepareLocationData(place: any) {
        if (place == "" || place == undefined || place == null || place.address_components == undefined) {
            return null;
        }

        var addressString = place.formatted_address;

        var viewport_custom = null;
        if (place.geometry.viewport != null) {
            var viewport = place.geometry.viewport;
            let viewport_custom: any = {};
            viewport_custom.viewport_northeast_lat = viewport.getNorthEast().lat().toString();
            viewport_custom.viewport_northeast_lng = viewport.getNorthEast().lng().toString();

            viewport_custom.viewport_southwest_lat = viewport.getSouthWest().lat().toString();
            viewport_custom.viewport_southwest_lng = viewport.getSouthWest().lng().toString();
        }

        var locationObject = {
            addressString: addressString,
            locationComponents: {
                street_number: "",
                street: "",
                city: "",
                state: "",
                stateCode: "",
                country_2: "",
                country_2Code: "",
                country: "",
                countryCode: "",
                zipcode: "",
                lat: "",
                lng: ""
            }
        };

        // Get each component of the address from the place details
        // and fill the corresponding field on the form.
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];

            var longname = place.address_components[i]["long_name"];
            var shortname = place.address_components[i]["short_name"];

            if (addressType == "street_number")
                locationObject.locationComponents.street_number = longname;

            else if (addressType == "route")
                locationObject.locationComponents.street = longname;

            else if (addressType == "locality")
                locationObject.locationComponents.city = longname;

            else if (addressType == "administrative_area_level_1") {
                locationObject.locationComponents.state = longname;
                locationObject.locationComponents.stateCode = shortname;
            }

            else if (addressType == "administrative_area_level_2") {
                locationObject.locationComponents.country_2 = longname;
                locationObject.locationComponents.country_2Code = longname;
            }

            else if (addressType == "country") {
                locationObject.locationComponents.country = longname;
                locationObject.locationComponents.countryCode = shortname;
            }

            else if (addressType == "postal_code")
                locationObject.locationComponents.zipcode = longname;
        }
        locationObject.locationComponents.lat = place.geometry.location.lat();
        locationObject.locationComponents.lng = place.geometry.location.lng();

        //locationObject.viewport_custom = viewport_custom;

        if (!(locationObject.locationComponents.street_number == "" || locationObject.locationComponents.street_number == undefined || locationObject.locationComponents.street_number == null) && !(locationObject.locationComponents.street == "" || locationObject.locationComponents.street == undefined || locationObject.locationComponents.street == null))
            locationObject.locationComponents.street = locationObject.locationComponents.street_number + " " + locationObject.locationComponents.street

        //locationObject.location = viewport;

        return locationObject;
    }

}