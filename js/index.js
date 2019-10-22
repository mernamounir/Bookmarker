var siteNameInp = document.getElementById("siteName");
var siteUrlInp = document.getElementById("siteUrl");
var btn = document.getElementById("myBtn");
var sites = [];
var index = 0;



btn.onclick = function()
{
    submit();
   displaySite();
    clearForm();
}

function submit()
{
var site={
            name:siteNameInp.value,
            url:siteUrlInp.value
            
        }
        sites.push(site);
        localStorage.setItem("site" , JSON.stringify(sites)) 
}
function displaySite()
{
    var cols = "";
    for(var i = 0 ; i<sites.length;i++)
        {
            cols +=`<div class="line m-5">
        <div class="col-md-12 d-flex justify-content-start mx-3 my-2">
        <h6 class="text-dark p-2">`+sites[i].name+`</h6>
        <a class="btn btn-info mx-5" href="`+sites[i].url+`">Visit</a>
        <button type="button" onclick="deleteSite(`+i+`)" class="btn btn-danger">Delete</button>
        </div>
        </div>`
        }
    document.getElementById("sitesRow").innerHTML=cols;
}
function clearForm()
{
    var inputs = document.getElementsByClassName("form-control");
    for(i = 0 ; i<inputs.length ; i++)
        {
            inputs[i].value="";
        }
}
function deleteSite(id)
{
    sites.splice(id,1);
    displaySite();
}