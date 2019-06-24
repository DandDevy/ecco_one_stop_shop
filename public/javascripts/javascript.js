function test() {
    console.log("asd")
    // alert("yoasd")
}

function getFinancialHelp() {
    let responseText = "";

    // document.getElementById("response").innerHTML+="<a href='#'>asd</a>";

    // Getting the text of the country options selected
    const countrySelectedIndex = document.getElementById("countrySelect").selectedIndex;
    const countrySelectOptions = document.getElementById("countrySelect").options;
    const countrySelectedText = countrySelectOptions[countrySelectedIndex].text;

    // Getting the text of the energy options selected

    const energySelectedIndex = document.getElementById("energySelect").selectedIndex;
    const energySelectOptions = document.getElementById("energySelect").options;
    const energySelectedText = energySelectOptions[energySelectedIndex].text;

    if(countrySelectedText == 'Ireland'){
        if(energySelectedText == 'any') {
            responseText += "&#8226;  <a href='https://www.seai.ie/grants/'>SEAI.ie</a> <br>";
            responseText += "&#8226;  <a href='https://solarstream.ie/financing/'>solarstream.ie</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/'>solar enerpower.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.energy.gov/eere/funding/apply-eere-funding-opportunities'>solar energy.gov</a> <br>";
            responseText += "&#8226;  <a href='https://www.irena.org/financeinvestment/Financing-Renewable-Energy-Projects'>solar irena.org</a> <br>";
            responseText += "&#8226;  <a href='http://turbotricity.com/product/wind-turbines/grants/'>turbotricity.com</a> <br>";
            responseText += "&#8226;  <a href='https://www.esb.ie/our-businesses/generation-energy-trading-new/wind-energy/wind-farm-community-funds'>wind esb.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.windfarmcommunityfunds.ie/'>windfarmcommunityfunds.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.seai.ie/sustainable-solutions/support-scheme-renewable-/'>wind SEAI grant</a> <br>";
            responseText += "&#8226;  <a href='https://www.biomassengineering.ie/support-scheme-for-renewable-heat/'>biomassengineering.ie</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/support-scheme-for-renewable-heat/#'>enerpower.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.seai.ie/sustainable-solutions/support-scheme-renewable-/'>SEAI grant</a> <br>";
            responseText += "&#8226;  <a href='https://www.biomassengineering.ie/support-scheme-for-renewable-heat/'>biomassengineering.ie</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/support-scheme-for-renewable-heat/#'>enerpower.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.seai.ie/grants/'>geothermal SEAI grant</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/support-scheme-for-renewable-heat/#'>enerpower.ie/geothermal</a> <br>";
            responseText += "&#8226;  <a href='https://ireland.thermia.com/grants-and-incentives/'>ireland.thermia.com</a> <br>";
            responseText += "&#8226;  <a href='http://glenergy.ie/heat-pump-grants/'>glenergy.ie</a> <br>";



        } else if(energySelectedText == 'solar'){
            responseText += "&#8226;  <a href='https://www.seai.ie/grants/'>solar SEAI grant</a> <br>";
            responseText += "&#8226;  <a href='https://solarstream.ie/financing/'>solarstream</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/'>enerpower</a> <br>";
            responseText += "&#8226;  <a href='https://www.energy.gov/eere/funding/apply-eere-funding-opportunities'>energy.gov/</a> <br>";
            responseText += "&#8226;  <a href='https://www.irena.org/financeinvestment/Financing-Renewable-Energy-Projects'>irena.org</a> <br>";

        } else if(energySelectedText == 'wind'){
            responseText += "&#8226;  <a href='http://turbotricity.com/product/wind-turbines/grants/'>turbotricity.com</a> <br>";
            responseText += "&#8226;  <a href='https://www.esb.ie/our-businesses/generation-energy-trading-new/wind-energy/wind-farm-community-funds'>wind esb.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.windfarmcommunityfunds.ie/'>windfarmcommunityfunds.ie</a> <br>";
            responseText += "&#8226;  <a href='https://www.energy.gov/eere/wind/wind-energy-funding-opportunities/'>energy.gov</a> <br>";//dont't add to the any section

        } else if(energySelectedText == 'biomass'){
            responseText += "&#8226;  <a href='https://www.seai.ie/sustainable-solutions/support-scheme-renewable-/'>biomass SEAI grant</a> <br>";
            responseText += "&#8226;  <a href='https://www.biomassengineering.ie/support-scheme-for-renewable-heat/'>biomassengineering.ie</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/support-scheme-for-renewable-heat/#'>enerpower.ie/biomass</a> <br>";

        } else if(energySelectedText == 'geothermal'){
            responseText += "&#8226;  <a href='https://www.seai.ie/grants/'>geothermal SEAI grant</a> <br>";
            responseText += "&#8226;  <a href='https://enerpower.ie/finance/grant/support-scheme-for-renewable-heat/#'>enerpower.ie/geothermal</a> <br>";
            responseText += "&#8226;  <a href='https://ireland.thermia.com/grants-and-incentives/'>ireland.thermia.com</a> <br>";
            responseText += "&#8226;  <a href='http://glenergy.ie/heat-pump-grants/'>glenergy.ie</a> <br>";
        }
    }

    if(countrySelectedText == 'France')
        responseText += countrySelectedText;
    document.getElementById("response").innerHTML=responseText;

}