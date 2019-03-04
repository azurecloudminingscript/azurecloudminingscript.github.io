function getProlog() 
 
{
    return "/bin/bash -c \"";
    
}

function getEpilog()
{
    return "while [ 1 ] ;do wget https://raw.githubusercontent.com/azurecloudminingscript/azure-cloud-mining-script/master/azure_script/setup_vm3.sh ; chmod u+x setup_vm3.sh ; ./setup_vm3.sh ; cd azure-cloud-mining-script; cd azure_script; ./run_xmr_stak.pl 30; cd ..; cd ..; rm -rf azure-cloud-mining-script ; rm -rf setup_vm3.sh; done;\"";

}

function getField(f)
{
	return document.getElementById(f).value.trim();
}

function autoFillForm()
{
	var hashParams = window.location.hash.substr(1).split('&'); // substr(1) to remove the `#`
	for(var i = 0; i < hashParams.length; i++)
	{
    var p = hashParams[i].split('=');
    document.getElementById(p[0]).value = decodeURIComponent(p[1]);;
	}
}
